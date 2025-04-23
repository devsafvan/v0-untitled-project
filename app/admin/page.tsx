"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function AdminPage() {
  const [url, setUrl] = useState("")
  const [status, setStatus] = useState<{ success?: boolean; message: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus(null)

    try {
      const response = await fetch("/api/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          success: true,
          message: "URL set successfully! The timer will now redirect to this URL.",
        })
      } else {
        setStatus({
          success: false,
          message: data.error || "Failed to set URL",
        })
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "An error occurred while setting the URL",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 text-transparent bg-clip-text">
            Set Redirect URL
          </span>
        </h1>

        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Set the URL that users will be redirected to when the timer reaches zero.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Redirect URL
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white rounded-md hover:from-blue-700 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 transition-colors shadow-md disabled:opacity-70"
          >
            {isLoading ? "Setting URL..." : "Set URL"}
            {!isLoading && <ArrowRight className="ml-2" size={18} />}
          </button>
        </form>

        {status && (
          <div
            className={`mt-4 p-3 rounded-md ${
              status.success
                ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
            }`}
          >
            {status.message}
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">API Instructions</h2>
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            You can also set the URL programmatically by sending a POST request to:
          </p>
          <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm mb-2 overflow-x-auto">
            POST /api/url
          </code>
          <p className="mb-2 text-gray-700 dark:text-gray-300">With the following JSON body:</p>
          <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm overflow-x-auto">
            {`{ "url": "https://your-redirect-url.com" }`}
          </code>
        </div>
      </div>
    </main>
  )
}
