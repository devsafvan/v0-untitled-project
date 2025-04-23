import { type NextRequest, NextResponse } from "next/server"

// This is a global variable to store the URL between requests
// In a production app, you would use a database
let storedUrl = "https://example.com"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url } = body

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    // Store the URL
    storedUrl = url
    console.log("URL stored successfully:", storedUrl)

    return NextResponse.json({ success: true, url: storedUrl })
  } catch (error) {
    console.error("Error processing URL:", error)
    return NextResponse.json({ error: "Failed to process URL" }, { status: 500 })
  }
}

export async function GET() {
  console.log("GET request received, returning URL:", storedUrl)
  return NextResponse.json({ url: storedUrl })
}
