// Components
import Link from 'next/link'
import Image from 'next/image'
import Layout from './layout.jsx'
import sudokuExample from '/public/images/sudoku.png';
import ctcExample from '/public/images/crack-the-code.png';
import sudokuTutorialsExample from '/public/images/tutorials/single-possibility.png';
import crackTheCodeExample from '/public/images/tutorials/crack-the-code.jpg';
import minesweeperExample from 'public/images/minesweeper.png';
import minesweeperTutorialExample from 'public/images/tutorials/minesweeper.png';


export default function Home() {
	
  return (
  	<div className='grid bg-mosaic h-full'>
    	<h1 className={`text-center text-indigo-100 p-5 text-4xl bg-blue-900 border border-[#010030] shadow-[inset_0px_-5px_20px_0px_#010030] font-mosaic`}>Puzzle Challenge</h1>
    	
    	<div className="p-1 pt-5">	
		  	<h2 className='text-2xl font-mosaic'>Games</h2>
		  	<div className='p-1 grid grid-cols-2 gap-1 sm:grid-cols-5 sm:gap-5'>
					<Link 
						href='/sudoku'
						className="pt-1 hover:text-indigo-900 active:text-indigo-900"
					>Sudoku
						<Image
							src={sudokuExample}
							alt="Sudoku"
						/>
					</Link>
					
					<Link 
						href='/crack-the-code'
						className="pt-1 hover:text-indigo-900 active:text-indigo-900"
					>Crack the Code
						<Image
							src={ctcExample}
							alt="Crack the Code"
						/>
					</Link>
					
					<Link 
						href='/minesweeper'
						className="pt-1 hover:text-indigo-900 active:text-indigo-900"
					>Minesweeper
						<Image
							src={minesweeperExample}
							alt="Minesweeper"
						/>
					</Link>
					
		  	</div>
    	</div>
    	
    	<div className="p-1 pt-10">	
		  	<h2 className='text-2xl font-mosaic'>Tutorials</h2>
		  	<div className='p-1 grid grid-cols-2 gap-1 sm:grid-cols-5 sm:gap-5'>
		  	
					<Link 
						href='/sudoku-tutorials'
						className="pt-1 hover:text-indigo-900 active:text-indigo-900"
					>Sudoku Tutorials
						<Image
							src={sudokuTutorialsExample}
							alt="Sudoku Tutorials"
						/>
					</Link>	
						  	
					<Link 
						href='/ctc-tutorial'
						className="pt-1 hover:text-indigo-900 active:text-indigo-900"
					>CtC Tutorial
						<Image
							src={crackTheCodeExample}
							alt="Crack the Code Tutorial"
						/>
					</Link>	
						  	
					<Link 
						href='/minesweeper-tutorial'
						className="pt-1 hover:text-indigo-900 active:text-indigo-900"
					>Minesweeper Tutorial
						<Image
							src={minesweeperTutorialExample}
							alt="Minesweeper Tutorial"
						/>
					</Link>
					
		  	</div>
    	</div>
    	
  	</div>
  )
}
