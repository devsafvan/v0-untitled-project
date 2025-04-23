"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Film } from "lucide-react"
import CircularTimer from "./circular-timer"
import { getRedirectUrl } from "@/lib/actions"

export default function TimerSection() {
  const [timeLeft, setTimeLeft] = useState(10) // 10 seconds countdown
  const [redirectUrl, setRedirectUrl] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch the redirect URL when component mounts
    const fetchUrl = async () => {
      try {
        const url = await getRedirectUrl()
        console.log("Redirect URL fetched:", url)
        setRedirectUrl(url || "https://example.com") // Fallback URL
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to fetch redirect URL:", error)
        setRedirectUrl("https://example.com") // Fallback URL
        setIsLoading(false)
      }
    }

    fetchUrl()
  }, [])

  useEffect(() => {
    if (isLoading || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1))
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, isLoading])

  if (isLoading) {
    return (
      <div className="w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center animate-pulse">
        <Film className="w-16 h-16 text-blue-500 dark:text-blue-400" />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <CircularTimer timeLeft={timeLeft} totalTime={10} />

      <div className="mt-8 text-center">
        {timeLeft > 0 ? (
          <p className="text-xl font-medium text-blue-600 dark:text-blue-400">Preparing your movie...</p>
        ) : (
          <a
            href={redirectUrl}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white rounded-md hover:from-blue-700 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20"
          >
            Get Movie 🍿 <ArrowRight className="ml-2" size={18} />
          </a>
        )}
      </div>
    </div>
  )
}
