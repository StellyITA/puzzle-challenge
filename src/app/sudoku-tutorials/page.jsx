import Link from 'next/link';
import Image from 'next/image';

import basicTechniquesIcon from '/public/images/tutorials/unique-candidate.png'
import pointingPairsIcon from '/public/images/tutorials/pointing-pairs.png'
import doublePairsIcon from '/public/images/tutorials/double-pairs.png'

export default function SudokuTutorials() {
	return (
		<div className='grid'>
			<h1 className='place-self-center p-3 text-4xl'>Sudoku Tutorials</h1>
			
				<ul className='place-self-center'>
				
					<li className='pb-5'>
						<Link 
							href={'/sudoku-tutorials/basic'}
							className="hover:text-indigo-900 active:text-indigo-900"
						>
							<div className='grid'>
								<h2 className='place-self-center text-xl p-1'>Basic Scanning Techniques</h2>
							</div>
							<Image
								src={basicTechniquesIcon}
								alt='Basic Scanning Techniques'
							/>
						</Link>
					</li>
				
					<li className='pb-5'>
						<Link 
							href={'/sudoku-tutorials/pointing-pairs'}
							className="hover:text-indigo-900 active:text-indigo-900"
						>
							<div className='grid'>
								<h2 className='place-self-center text-xl p-1'>Pointing Pairs/Triples</h2>
							</div>
							<Image
								src={pointingPairsIcon}
								alt='Pointing Pairs/Triples'
							/>
						</Link>
					</li>
				
					<li className='pb-5'>
						<Link 
							href={'/sudoku-tutorials/double-pointing-pairs'}
							className="hover:text-indigo-900 active:text-indigo-900"
						>
							<div className='grid'>
								<h2 className='place-self-center text-xl p-1'>Double Pointing Pairs</h2>
							</div>
							<Image
								src={doublePairsIcon}
								alt='Double Pointing Pairs'
							/>
						</Link>
					</li>
					
				</ul>
				
		</div>
	)
}
