import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Puzzle Challenge - Play Sudoku for Free',
  description: 'Millions of challenging sudoku puzzles (and more games to come!)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-indigo-100 text-indigo-dark'}>
      	{children}
      	<Analytics/>
      </body>
    </html>
  )
}
