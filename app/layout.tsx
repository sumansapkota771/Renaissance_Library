import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "The Renaissance Library - The Learner's Garden",
  description:
    "Discover knowledge and wisdom at The Renaissance Library. Your gateway to learning, research, and intellectual growth in our beautiful collection.",
  keywords: "library, books, learning, education, Renaissance Library, reading, research, knowledge",
  authors: [{ name: "The Renaissance Library" }],
  creator: "The Renaissance Library",
  publisher: "The Renaissance Library",
  openGraph: {
    title: "The Renaissance Library - The Learner's Garden",
    description:
      "Discover knowledge and wisdom at The Renaissance Library. Your gateway to learning and intellectual growth.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Renaissance Library - The Learner's Garden",
    description: "Discover knowledge and wisdom at The Renaissance Library.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
