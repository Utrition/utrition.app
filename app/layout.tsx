import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-be-vietnam-pro",
})

export const metadata: Metadata = {
  title: "UTRITION - Catalyzing Health with AI",
  description:
    "We're improving global well-being by utilizing AI to simplify food information and access for everyone.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Check for user preference
              const userPreference = localStorage.getItem('userPreference');
              const savedTheme = localStorage.getItem('theme');
              
              if (userPreference === 'true' && savedTheme) {
                // User has a preference, use it
                document.documentElement.classList.toggle('dark', savedTheme === 'dark');
              } else {
                // Otherwise use system preference
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.classList.toggle('dark', systemPrefersDark);
              }
            })();
          `
        }} />
      </head>
      <body className={`${beVietnamPro.variable} font-sans bg-white dark:bg-gray-950 text-[#0F2830] dark:text-white`}>
        {children}
      </body>
    </html>
  )
}

