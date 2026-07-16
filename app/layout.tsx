import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'FITAHIANTSOA Luc Onesine Portfolio',
  description:
    'Portfolio professionnel d\'un développeur full stack spécialisé en web et mobile. Découvrez mes projets, compétences et expérience.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logoFTSC.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logoFTS.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logoFTSC.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logoFTS.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ color: '#00d4ff' }],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

