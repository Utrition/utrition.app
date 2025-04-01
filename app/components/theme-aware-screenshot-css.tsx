import Image from "next/image"

/*
 * This component uses CSS classes to show/hide images based on the theme.
 * The light image is shown by default, and the dark image is shown when the `dark` class is applied to the body.
 */

export function ThemeAwareScreenshotCSS() {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="/light-app-screen.png"
        alt="UTRITION App Screenshot"
        width={400}
        height={600}
        className="object-contain mx-auto block dark:hidden"
      />
      <Image
        src="/dark-app-screen.png"
        alt="UTRITION App Screenshot"
        width={400}
        height={600}
        className="object-contain mx-auto hidden dark:block"
      />
    </div>
  )
}