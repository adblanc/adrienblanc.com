import { Footer } from '@/components/Footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-50 text-gray-700">
        <div className="min-h-screen ">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
