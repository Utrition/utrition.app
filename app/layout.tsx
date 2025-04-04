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
  title: 'UTRITION - Catalyze Health with AI',
  openGraph: {
    title: 'UTRITION - Catalyze Health with AI',
    description: 'UTRITION helps you make informed food choices by utilizing AI.',
    url: 'https://utrition.ai',
    siteName: 'UTRITION',
    images: [
      {
        url: 'https://utrition.ai/opengraph-image/route',
        width: 1200,
        height: 630,
        alt: 'UTRITION Preview Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UTRITION - Catalyze Health with AI',
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
