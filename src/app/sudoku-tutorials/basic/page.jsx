import Image from 'next/image';
import Link from 'next/link';

import uniqueCandidate from '/public/images/tutorials/unique-candidate.png';
import singlePossibility from '/public/images/tutorials/single-possibility.png';

export default function BasicTechniques() {
	return (
		<div>
			<h1 className='text-4xl text-center p-10 pt-0'>Basic Scanning Techniques</h1>
			<h2 className='text-2xl p-1'>How do you play Sudoku?</h2>
			<p className='bg-yellow-50 p-1 px-2 border border-indigo-200'>{"Sudoku is a popular number puzzle game that requires logic and deduction to solve. The classic version consists of a 9x9 grid divided into nine 3x3 subgrids, and the objective is to fill in the grid with numbers from 1 to 9 so that each row, each column, and each subgrid contains all the digits from 1 to 9 without repetition. Let's go through the two basic scanning techniques to help you solve easy Sudoku puzzles:"}</p>
			<h3 className='text-xl pt-5 pb-1'>1. Unique Candidate</h3>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>
				Scan rows, columns, or subgrids to find one where a number can only fit in one particular cell. This means no other cell in that row, column, or subgrid can have that number as a candidate.
				<Image 
					src={uniqueCandidate}
					alt='Unique Candidate Example'
					className='place-self-center p-1'
				/>
				As you can see above, in the 3rd subgrid, 6 can only be in the middle cell, because the others already have a 6 in the same row or column.
			</p>
			<h3 className='text-xl pt-5 pb-1'>2. Single Possibility</h3>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>
				Look for cells with only one possible number. Simply scan the grid and find any cell that has only one candidate left.
				<Image 
					src={singlePossibility}
					alt='Single Possibility Example'
					className='place-self-center p-1'
				/>
				If we look at the highlighted cell, we can see that 1 and 2 are in the same column; 3,5,6,7 in the same row, while 4 and 8 are in the same subgrid, so we know for sure that the value is 9.
			</p>
		</div>
	)
}
