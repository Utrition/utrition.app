import Image from "next/image"

export function ThemeAwareScreenshotCSS() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/light-app-screen.png"
        alt="UTRITION App Screenshot"
        width={600}
        height={900}
        className="object-contain w-full h-auto max-h-[600px] block dark:hidden"
        priority
      />
      <Image
        src="/dark-app-screen.png"
        alt="UTRITION App Screenshot"
        width={600}
        height={900}
        className="object-contain w-full h-auto max-h-[600px] hidden dark:block"
        priority
      />
    </div>
  )
}