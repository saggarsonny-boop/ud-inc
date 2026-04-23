import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import UDNav from './components/UDNav'
import UDFooter from './components/UDFooter'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Universal Document™ Incorporated',
  description:
    'The standards body behind Universal Document™ — an open, free, and AI-native document format designed as the modern successor to PDF, DOCX, and legacy image formats.',
  metadataBase: new URL('https://universaldocument.hive.baby'),
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Universal Document™ Incorporated',
    description: 'The Open Standard Transforming Global Document Workflows',
    url: 'https://universaldocument.hive.baby',
    siteName: 'Universal Document™ Incorporated',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-cream text-navy antialiased flex flex-col min-h-screen">
        <UDNav />
        {children}
        <UDFooter />
      </body>
    </html>
  )
}
