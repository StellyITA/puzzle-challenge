import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Puzzle Challenge',
  description: 'Millions of sudoku puzzles (and more games to come!)',
  keywords: [
  'puzzle','puzzles',/*'games',*/'game','online','free',
  'challenges','challenge','accepted','challenging','sudoku',
  'easy','medium','hard','expert','printable','brain',
  'no jumping','logic','logical','reasoning'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-indigo-100 text-indigo-dark'}>{children}</body>
    </html>
  )
}
