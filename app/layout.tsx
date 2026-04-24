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
  title: 'Universal Document™ Incorporated — The Open AI-Native Document Standard. PDF Successor.',
  description: 'Universal Document™ is an open, free, AI-native document format designed as the modern successor to PDF and DOCX. Structured, tamper-evident, and built for the age of AI. Free forever.',
  keywords: 'universal document format, PDF alternative, DOCX replacement, AI document format, open document standard, structured document format, tamper-evident document, document format successor, UDS file format, open document specification',
  metadataBase: new URL('https://universaldocument.hive.baby'),
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Universal Document™ Incorporated — The Open AI-Native Document Standard. PDF Successor.',
    description: 'Universal Document™ is an open, structured, AI-native document format. Free forever. Successor to PDF and DOCX.',
    url: 'https://universaldocument.hive.baby',
    siteName: 'Universal Document™ Incorporated',
    type: 'website',
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
        <div style={{ background: '#c8960a', color: '#1e2d3d', fontFamily: 'var(--font-dm-mono)', fontSize: 12, textAlign: 'center', padding: '0 24px', height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0 }}>
          ✦ All Pro features free during beta — no account required · no credit card · full access while we build ✦
        </div>
        {children}
        <UDFooter />
      </body>
    </html>
  )
}
