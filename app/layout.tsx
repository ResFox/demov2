import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://gamex-website.vercel.app'),
  title: 'GameX - Gaming Website',
  description: 'Experience just for gamers - Join our electrifying tournaments and gaming community',
  keywords: 'gaming, tournaments, esports, gaming gear, team, community',
  authors: [{ name: 'ULTRA CODE' }],
  icons: {
    icon: 'https://i.postimg.cc/PxTnhmmb/favicon-1.png',
  },
  openGraph: {
    title: 'GameX - Gaming Website',
    description: 'Experience just for gamers - Join our electrifying tournaments and gaming community',
    type: 'website',
    siteName: 'GameX',
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
