interface AdSpaceProps {
  position: "top" | "bottom"
}

export default function AdSpace({ position }: AdSpaceProps) {
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
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-800/40 dark:to-blue-900/40 rounded-lg w-full h-20 flex items-center justify-center shadow-sm">
          <span className="text-blue-400 dark:text-blue-500 font-medium">Premium Movie Content</span>
        </div>
      </div>
    </div>
  )
}
