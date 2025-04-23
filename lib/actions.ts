"use server"

// Get the URL from the API route
export async function getRedirectUrl(): Promise<string> {
  try {
    // Use a relative URL which works in all environments
    const response = await fetch("/api/url", {
      cache: "no-store",
      // Add these headers to ensure the request is properly handled
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      console.error("API response not OK:", response.status, response.statusText)
      return "https://example.com" // Fallback URL
    }

    const data = await response.json()
    return data.url || "https://example.com"
  } catch (error) {
    console.error("Error fetching redirect URL:", error)
    return "https://example.com" // Fallback URL
  }
}

// Also update the saveRedirectUrl function to use a relative URL
export async function saveRedirectUrl(url: string): Promise<{ success: boolean }> {
  try {
    const response = await fetch("/api/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })

    if (!response.ok) {
      console.error("API response not OK:", response.status, response.statusText)
      return { success: false }
    }

    return { success: true }
  } catch (error) {
    console.error("Error saving URL:", error)
    return { success: false }
  }
}
