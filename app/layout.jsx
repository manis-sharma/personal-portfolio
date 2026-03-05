import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'Manish Dada - Python & Full-Stack Developer',
  description: 'Portfolio of Manish Dada, a passionate Python and Full-Stack Developer specializing in automation and web solutions.',
  keywords: ['Python', 'Full-Stack Developer', 'Web Development', 'Automation', 'React', 'Next.js'],
  creator: 'Manish Dada',
  openGraph: {
    title: 'Manish Dada - Developer Portfolio',
    description: 'Explore my projects and expertise in full-stack development and automation solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manish Dada - Developer Portfolio',
    description: 'Full-Stack Developer | Python | Automation',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
