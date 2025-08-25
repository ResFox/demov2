import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://pandoras-box-premium.vercel.app'),
  title: "Pandora's Box - Premium Gaming Cheats",
  description: 'Premium gaming cheats and tools for competitive advantage - Professional quality gaming enhancements',
  keywords: 'gaming, cheats, premium tools, game enhancements, competitive advantage, gaming software',
  authors: [{ name: 'ULTRA CODE' }],
  icons: {
    icon: 'https://i.postimg.cc/PxTnhmmb/favicon-1.png',
  },
  openGraph: {
    title: "Pandora's Box - Premium Gaming Cheats",
    description: 'Premium gaming cheats and tools for competitive advantage - Professional quality gaming enhancements',
    type: 'website',
    siteName: "Pandora's Box",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-poppins overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
