"use client"

interface CircularTimerProps {
  timeLeft: number
  totalTime: number
}

export default function CircularTimer({ timeLeft, totalTime }: CircularTimerProps) {
  const radius = 100
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - timeLeft / totalTime)

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Background circle */}
      <svg className="w-full h-full" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r={radius} fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="12" />

        {/* Progress circle */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="url(#blue-gradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 110 110)"
          className="transition-all duration-1000 ease-linear"
        />

        {/* Define gradient */}
        <defs>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
      </svg>

      {/* Timer text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
          {timeLeft}
        </span>
      </div>
    </div>
  )
}
