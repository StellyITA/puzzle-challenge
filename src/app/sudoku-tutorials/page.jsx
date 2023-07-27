import Link from 'next/link';
import Image from 'next/image';

import basicTechniquesExample from '/public/images/tutorials/unique-candidate.png'
import pointingPairsExample from '/public/images/tutorials/pointing-pairs.png'
import doublePairsExample from '/public/images/tutorials/double-pairs.png'
import nakedPairsExample from '/public/images/tutorials/naked-pairs.png';
import hiddenPairsExample from '/public/images/tutorials/hidden-pairs.png';
import xWingExample from '/public/images/tutorials/x-wing2.png';
import xyWingExample from '/public/images/tutorials/y-wing.png';
import swordfishExample from '/public/images/tutorials/swordfish2.png';

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
								src={basicTechniquesExample}
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
								src={pointingPairsExample}
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
								src={doublePairsExample}
								alt='Double Pointing Pairs'
							/>
						</Link>
					</li>
				
					<li className='pb-5'>
						<Link 
							href={'/sudoku-tutorials/naked-pairs-triples'}
							className="hover:text-indigo-900 active:text-indigo-900"
						>
							<div className='grid'>
								<h2 className='place-self-center text-xl p-1'>Naked Pairs/Triples</h2>
							</div>
							<Image
								src={nakedPairsExample}
								alt='Naked Pairs/Triples'
							/>
						</Link>
					</li>
				
					<li className='pb-5'>
						<Link 
							href={'/sudoku-tutorials/hidden-pairs-triples'}
							className="hover:text-indigo-900 active:text-indigo-900"
						>
							<div className='grid'>
								<h2 className='place-self-center text-xl p-1'>Hidden Pairs/Triples</h2>
							</div>
							<Image
								src={hiddenPairsExample}
								alt='Hidden Pairs/Triples'
							/>
						</Link>
					</li>
				
					<li className='pb-5'>
						<Link 
							href={'/sudoku-tutorials/x-wing'}
							className="hover:text-indigo-900 active:text-indigo-900"
						>
							<div className='grid'>
								<h2 className='place-self-center text-xl p-1'>X Wing</h2>
							</div>
							<Image
								src={xWingExample}
								alt='X Wing'
							/>
						</Link>
					</li>
				
					<li className='pb-5'>
						<Link 
							href={'/sudoku-tutorials/xy-wing'}
							className="hover:text-indigo-900 active:text-indigo-900"
						>
							<div className='grid'>
								<h2 className='place-self-center text-xl p-1'>XY Wing</h2>
							</div>
							<Image
								src={xyWingExample}
								alt='XY Wing'
							/>
						</Link>
					</li>
				
					<li className='pb-5'>
						<Link 
							href={'/sudoku-tutorials/swordfish'}
							className="hover:text-indigo-900 active:text-indigo-900"
						>
							<div className='grid'>
								<h2 className='place-self-center text-xl p-1'>Swordfish</h2>
							</div>
							<Image
								src={swordfishExample}
								alt='Swordfish'
							/>
						</Link>
					</li>
					
				</ul>
				
		</div>
	)
}
