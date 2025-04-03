import { Providers } from './components/theme-provider'
import './globals.css'

export const metadata = {
  title: 'UTRITION',
  description: 'UTRITION',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-primary-foreground">
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}
