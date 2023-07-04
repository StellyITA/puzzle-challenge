import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Puzzle Challenge',
  description: 'A collection of puzzle and logic games',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-indigo-100 text-indigo-dark'}>{children}</body>
    </html>
  )
}
