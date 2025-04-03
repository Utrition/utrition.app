"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

export function ThemeAwareScreenshot() {
  const { theme } = useTheme()

  const imageSrc = theme === "dark" ? "/dark-app-screen.png" : "/light-app-screen.png"

  return (
    <Image
      src={imageSrc}
      alt="UTRITION App Screenshot"
      width={600}
      height={1200}
      className="object-contain mx-auto"
    />
  )
}