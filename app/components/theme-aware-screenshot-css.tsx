'use client'

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeAwareScreenshotCSS() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative w-full h-full">
      {theme === 'light' ? (
        <Image
          src="/light-app-screen.png"
          alt="UTRITION App Screenshot"
          width={600}
          height={900}
          className="object-contain w-full h-auto max-h-[600px]"
          priority
        />
      ) : (
        <Image
          src="/dark-app-screen.png"
          alt="UTRITION App Screenshot"
          width={600}
          height={900}
          className="object-contain w-full h-auto max-h-[600px]"
          priority
        />
      )}
    </div>
  )
}