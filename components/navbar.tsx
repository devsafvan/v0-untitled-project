"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Info, Mail, Film } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center">
          <Film className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 text-transparent bg-clip-text">
            Movie Downloader
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-20">
          <nav className="container mx-auto px-4">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-xl py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={closeMenu}
                >
                  <Home className="mr-3" size={20} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center text-xl py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={closeMenu}
                >
                  <Info className="mr-3" size={20} />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center text-xl py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={closeMenu}
                >
                  <Mail className="mr-3" size={20} />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
