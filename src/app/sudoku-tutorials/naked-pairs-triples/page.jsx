import Image from 'next/image';

import nakedPairExample from '/public/images/tutorials/naked-pairs.png';
import nakedTripleExample from '/public/images/tutorials/naked-triples.png';

export default function nakedPairsTriples() {
	return (
		<div>
			<h1 className='text-4xl text-center p-10 pt-0'>Naked Pairs/Triples</h1>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>The Naked Pairs/Triples technique is an intermediate-level Sudoku solving technique that involves identifying two or three cells within a row, column, or 3x3 subgrid that contain the same two or three candidate numbers. Once identified, you can eliminate these candidates from other cells within the same row, column, or subgrid, as they are already locked into the identified cells. Let's go through a couple of examples:</p>
			<h2 className='text-xl p-1 pt-5'>1. Naked Pair</h2>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>
				<Image 
					src={nakedPairExample}
					alt='Naked Pair Example'
					className='place-self-center p-1'
				/>
				In this example, we can see that in the fourth column, there are two cells with the candidates 4 and 9. So, we can remove those candidates from the other cells in the same column.
			</p>
			<h2 className='text-xl p-1 pt-5'>2. Naked Triple</h2>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>
				<Image 
					src={nakedTripleExample}
					alt='Naked Triple Example'
					className='place-self-center p-1'
				/>
				In the fourth subgrid, we have three cells with only 2, 3 and 7 as possible candidates. We can safely remove these candidates from the other cells in the same subgrid.
			</p>
		</div>
	)
}
