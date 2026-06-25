import type { Metadata, Viewport } from 'next'
import { Share_Tech_Mono } from 'next/font/google'
import './globals.css'

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Michael Gregory Ibizugbe | Cybersecurity Portfolio',
  description:
    'Aspiring Security Professional at Caleb University. Focused on Security Analysis and Python automation. Explore my projects, skills, and contact info.',
  keywords: [
    'cybersecurity',
    'security analyst',
    'python automation',
    'CTF',
    'penetration testing',
    'Caleb University',
    'portfolio',
  ],
  authors: [{ name: 'Michael Gregory Ibizugbe' }],
  openGraph: {
    title: 'Michael Gregory Ibizugbe | Cybersecurity Portfolio',
    description: 'Aspiring Security Professional | Caleb University',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${shareTechMono.variable} bg-background`}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  )
}
