"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Toggle theme function
  const toggleTheme = () => {
    // Get current state
    const htmlElement = document.documentElement
    const isCurrentlyDark = htmlElement.classList.contains('dark')
    
    // Toggle to opposite state
    if (isCurrentlyDark) {
      htmlElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      htmlElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
    
    // Mark that user has made a choice
    localStorage.setItem('userPreference', 'true')
  }

  // Initialize theme on mount
  useEffect(() => {
    // Wait until mounted to avoid hydration issues
    setMounted(true)
    
    // Get the HTML element
    const htmlElement = document.documentElement
    
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme')
    const hasUserPreference = localStorage.getItem('userPreference') === 'true'
    
    if (hasUserPreference && savedTheme) {
      // Apply user's saved preference
      if (savedTheme === 'dark') {
        htmlElement.classList.add('dark')
        setIsDark(true)
      } else {
        htmlElement.classList.remove('dark')
        setIsDark(false)
      }
    } else {
      // No user preference, use system preference but don't save it
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (prefersDark) {
        htmlElement.classList.add('dark')
        setIsDark(true)
      } else {
        htmlElement.classList.remove('dark')
        setIsDark(false)
      }
    }
    
    // Add a media query listener for system preference changes
    // But only apply it if the user hasn't set a preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      const hasUserPref = localStorage.getItem('userPreference') === 'true'
      if (!hasUserPref) {
        if (e.matches) {
          htmlElement.classList.add('dark')
          setIsDark(true)
        } else {
          htmlElement.classList.remove('dark')
          setIsDark(false)
        }
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Don't render toggle until mounted to prevent hydration issues
  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  )
}