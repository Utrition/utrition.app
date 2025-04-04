import { Providers } from './components/theme-provider'
import { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UTRITION - Catalyze Health with AI',
  description: 'UTRITION helps you make informed food choices by utilizing AI to simplify food information and access for everyone.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://utrition.ai',
    siteName: 'UTRITION',
    title: 'UTRITION - Catalyze Health with AI',
    description: 'UTRITION helps you make informed food choices by utilizing AI to simplify food information and access for everyone.',
    images: [
      {
        url: '/utrition-banner.png',
        width: 150,
        height: 40,
        alt: 'UTRITION Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UTRITION - Catalyze Health with AI',
    description: 'UTRITION helps you make informed food choices by utilizing AI to simplify food information and access for everyone.',
    images: ['/utrition-banner.png'],
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
