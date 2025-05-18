import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
// import emailjs from '@emailjs/browser' // emailjs.init is handled by EmailInit
import { EmailInit } from './components/email-init'
import { Toaster } from 'sonner' // Add this import

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manish Sharma | Cyberpunk Portfolio 2082",
  description: "A neon-charged futuristic hacker-style portfolio of developer Manish Sharma.",
  openGraph: {
    title: "Manish Sharma | Cyberpunk Portfolio 2082",
    description: "A neon-charged futuristic hacker-style portfolio of developer Manish Sharma.",
    url: "https://ghost-protocol.vercel.app", // Consider updating if your domain changes
    siteName: "Ghost Protocol",
    images: [
      {
        url: "https://ghost-protocol.vercel.app/og-image.jpg", // Consider updating if your domain changes
        width: 1200,
        height: 630,
        alt: "Manish Sharma's Cyberpunk Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Sharma | Cyberpunk Portfolio 2082",
    description: "A neon-charged futuristic hacker-style portfolio of developer Manish Sharma.",
    images: ["https://ghost-protocol.vercel.app/og-image.jpg"], // Consider updating if your domain changes
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Manish Sharma" }],
  keywords: ["portfolio", "developer", "web development", "react", "nextjs", "cyberpunk"],
  // canonical: "https://ghost-protocol.vercel.app", // This was removed from metadata in a previous step, ensure it's correctly placed if needed
  generator: "Next.js"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // EmailJS initialization is handled by the EmailInit component
  // if (typeof window !== 'undefined') {
  //   emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  // }

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <EmailInit />
        {children}
        <Toaster richColors position="top-right" /> {/* Add this component here */}
      </body>
    </html>
  )
}
