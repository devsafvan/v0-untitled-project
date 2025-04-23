import { Suspense } from "react"
import TimerSection from "@/components/timer-section"
import AdSpace from "@/components/ad-space"
import { Film } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AdSpace position="top" />

      <div className="flex-1 flex flex-col items-center justify-center w-full px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center">
            <Film className="mr-2 text-blue-600 dark:text-blue-400" />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 text-transparent bg-clip-text">
              Movie Downloader
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Your movie is almost ready. Please wait for the countdown to complete.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center animate-pulse">
              <Film className="w-16 h-16 text-blue-500 dark:text-blue-400" />
            </div>
          }
        >
          <TimerSection />
        </Suspense>
      </div>

      <AdSpace position="bottom" />
    </main>
  )
}
