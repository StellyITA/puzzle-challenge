// Components
import Link from 'next/link'
import Image from 'next/image'
import Layout from './layout.jsx'

export default function Home() {

	const games = [
	'Sudoku','Sudoku','Sudoku','Sudoku',
	'Sudoku','Sudoku','Sudoku','Sudoku',
	'Sudoku','Sudoku','Sudoku','Sudoku',
	'Sudoku','Sudoku','Sudoku'];
	
  return (
  	<div className='grid'>
    	<h1 className='place-self-center p-3 text-4xl'>Puzzle Challenge</h1>
    	<div className="p-1">	
		  	<h3 className='text-2xl'>Games</h3>
		  	<div className='p-2 grid grid-cols-2 gap-1 sm:grid-cols-5 sm:gap-5'>
					{games.map(e => <Link 
						href={'/' + e.toLowerCase()}
						className="hover:text-indigo-900"
					>{e}
						<Image
							src={require(`/home/stelly/puzzle-challenge/public/images/${e.toLowerCase()}.png`)}
							alt={e}
							width={1000}
							height={1000}
						/>
					</Link>)}
		  	</div>
    	</div>
  	</div>
  )
}
