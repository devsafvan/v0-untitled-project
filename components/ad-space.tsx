"use client"

import { useEffect, useRef } from "react"

interface AdSpaceProps {
  position: "top" | "bottom"
}

export default function AdSpace({ position }: AdSpaceProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This will run only on the client side
    // Create the script element for the ad
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "//st-n.ads7-adnow.com/js/a.js"
    script.async = true

    // Add the script to the document body
    document.body.appendChild(script)

    // Set up the global variable for the ad
    if (typeof window !== "undefined") {
      ;(window as any).sc_adv_out = (window as any).sc_adv_out || []
      ;(window as any).sc_adv_out.push({
        id: 886806,
        domain: "n.ads7-adnow.com",
      })
    }

    return () => {
      // Clean up the script when the component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div
      className={`w-full bg-blue-50 dark:bg-blue-900/30 p-4 flex justify-center items-center ${
        position === "top"
          ? "border-b border-blue-100 dark:border-blue-800"
          : "border-t border-blue-100 dark:border-blue-800"
      }`}
    >
      <div className="text-center w-full max-w-3xl">
        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">Advertisement</p>
        <div className="bg-white dark:bg-gray-800 rounded-lg w-full p-4 shadow-sm">
          {/* Ad container */}
          <div id="SC_TBlock_886806" ref={adRef}></div>
        </div>
      </div>
    </div>
  )
}
