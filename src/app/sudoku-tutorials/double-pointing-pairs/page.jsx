import Image from 'next/image';

import doublePairIcon from '/public/images/tutorials/double-pairs.png'

export default function doublePointingPairs() {
	return (
		<div>
			<h1 className='text-4xl text-center p-10 pt-0'>Double Pointing Pairs</h1>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>Let's go through the Double Pointing Pairs technique. It is an intermediate Sudoku solving technique that involves identifying a number that is confined to the same two rows or columns within two different 3x3 subgrids. Once you spot these pairs, you can eliminate these numbers as candidates from other cells in the same rows or columns in the other subgrid.
				<p className='pt-5'>Here's an example:</p>
				<Image 
					src={doublePairIcon}
					alt='Double Pointing Pair Example'
					className='place-self-center p-1'
				/>
				Let's look at the three leftmost subgrids. Since the number 5 can only be in the first and second column in both the higher and the lower subgrids, in the middle subgrid, we can put the number 5 only in the third column.
			</p>
		</div>
	)
}
