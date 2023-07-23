import Link from 'next/link';

export const metadata = {
  title: 'Sudoku Tutorials - How to Solve Every Puzzle',
  description: 'From basic to advanced techniques, learn how to solve every sudoku puzzle with our tutorials with examples.',
}

export default function sudokuLayout({ children }) {
	return (
		<section className='grid text-justify p-5 pt-1'>
			<Link 
				href='/'
				className='hover:text-indigo-900 active:text-indigo-900'
			>Home</Link>
			{children}
			<Link
				href='/sudoku'
				className='place-self-center text-white active:bg-blue-700 hover:bg-blue-700 mt-2 p-3 px-4 text-3xl bg-blue-600 rounded-xl border border-blue-900'
			>Play Sudoku</Link>
		</section>
	)
}
