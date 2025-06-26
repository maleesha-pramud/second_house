import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Second Home Horana - Your Perfect Stay in Sri Lanka</title>
        <meta
          name="description"
          content="Your second home in Horana. Find comfortable and affordable short-term room rentals with all the amenities you need for a perfect stay in Sri Lanka."
        />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
