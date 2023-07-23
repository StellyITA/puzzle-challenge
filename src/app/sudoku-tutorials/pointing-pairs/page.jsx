import Image from 'next/image';

import pointingPairEx1 from '/public/images/tutorials/pointing-pairs.png'
import pointingPairEx2 from '/public/images/tutorials/pointing-pairs-2.png'

export default function pointingPairs() {
	return (
		<div>
			<h1 className='text-4xl text-center p-10 pt-0'>Pointing Pairs/Triples</h1>
			<p className='bg-yellow-50 p-1 px-2 border border-indigo-200'>Pointing Pairs/Triples is a useful Sudoku solving technique for puzzle from medium difficulty onward. It helps you eliminate candidate numbers from certain cells within a 3x3 subgrid (box) when they are constrained to a specific row or column, or vice versa, from the row/column when they are constrained to a specific subgrid. This technique is also known as "Box/Line Reduction." Let's go through both cases with examples:</p>
			<h2 className='text-xl p-1 pt-5'>1. Number constrained to a specific row/column inside a subgrid</h2>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>
				<Image 
					src={pointingPairEx1}
					alt='Pointing Pair Example'
					className='place-self-center p-1'
				/>
				In the example above, we can see that the number 5 can only be in the last column of the sixth subgrid, so it can't be anywhere else in that specific column, outside of that subgrid.
			</p>
			<h2 className='text-xl p-1 pt-5'>2. Number constrained to a specific subgrid inside a row/column</h2>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>
				<Image 
					src={pointingPairEx2}
					alt='Pointing Pair Example'
					className='place-self-center p-1'
				/>
				In this example, in the fifth column, the number 2 can only be in one of the two colored cells in the upper subgrid. So, in that subgrid, the number 2 can only be in that column.
			</p>
		</div>
	)
}
