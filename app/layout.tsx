import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "UTRITION - Catalyzing Health with AI",
  description:
    "We're improving global well-being by utilizing AI to simplify food information and access for everyone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                 (function () {
                   try {
                     const theme = localStorage.getItem("theme");
                     console.log("Initial theme:", theme); // Add this line
                     if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                       document.documentElement.classList.add("dark");
                     } else {
                       document.documentElement.classList.remove("dark");
                     }
                   } catch (_) {}
                 })();
               `,
          }}
        />
      </head>
      <body
        className={`${beVietnamPro.variable} font-sans bg-white dark:bg-[#2C2C2C] text-[#0F2830] dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
