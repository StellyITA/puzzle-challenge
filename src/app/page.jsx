// Components
import Link from 'next/link'
import Image from 'next/image'
import Layout from './layout.jsx'
import sudokuIcon from '/public/images/sudoku.png';

export default function Home() {
	
  return (
  	<div className='grid'>
    	<h1 className='place-self-center p-3 text-4xl'>Puzzle Challenge</h1>
    	<div className="p-1">	
		  	<h3 className='text-2xl'>Games</h3>
		  	<div className='p-2 grid grid-cols-2 gap-1 sm:grid-cols-5 sm:gap-5'>
					<Link 
						href='/sudoku'
						className="hover:text-indigo-900"
					>Sudoku
						<Image
							src={sudokuIcon}
							alt="Sudoku"
						/>
					</Link>
		  	</div>
    	</div>
  	</div>
  )
}
