import { type NextRequest, NextResponse } from "next/server"
import { saveRedirectUrl } from "@/lib/actions"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url } = body

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    const result = await saveRedirectUrl(url)

    if (!result.success) {
      return NextResponse.json({ error: "Invalid URL provided" }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing URL:", error)
    return NextResponse.json({ error: "Failed to process URL" }, { status: 500 })
  }
}
