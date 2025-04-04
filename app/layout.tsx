import { Providers } from './components/theme-provider'
import { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'
import './opengraph-image/register'


const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://utrition.ai'),
  title: 'UTRITION | Catalyze Health',
  description: 'Simplify food choices with AI-powered food product recommendations tailored to your lifestyle. UTRITION helps you find the right foods faster—based on your diet, allergies, and preferences.',
  openGraph: {
    title: 'UTRITION - Catalyze Health',
    description: 'Simplify food choices with AI-powered food product recommendations tailored to your lifestyle. UTRITION helps you find the right foods faster—based on your diet, allergies, and preferences.',
    url: 'https://utrition.ai',
    siteName: 'UTRITION',
    images: [
      {
        url: 'https://utrition.ai/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'UTRITION Preview Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UTRITION | Catalyze Health',
    description: 'Simplify food choices with AI-powered food product recommendations tailored to your lifestyle. UTRITION helps you find the right foods faster—based on your diet, allergies, and preferences.',
    images: ['https://utrition.ai/opengraph-image'],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${beVietnamPro.className} bg-background text-primary-foreground`}>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}
