import Image from 'next/image';

import hiddenPairExample from '/public/images/tutorials/hidden-pairs.png';

export default function hiddenPairsTriples() {
	return (
		<div>
			<h1 className='text-4xl text-center p-10 pt-0'>Hidden Pairs/Triples</h1>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>
				The Hidden Pairs/Triples technique is an intermediate-level Sudoku solving technique that involves identifying two candidate numbers that are confined to two cells, or three candidates confinded to three cells within a row, column, or 3x3 subgrid. Once identified, you can eliminate all other candidates from those cells, helping to narrow down possibilities and solve the puzzle. Here's an example of an hidden pair:
				<Image 
					src={hiddenPairExample}
					alt='Hidden Pair Example'
					className='place-self-center p-1'
				/>
				In this example, we can see that in the third row, there are only two cells with the candidates 3 and 9. Since these two cells are the only one in the row that can contain these  candidates, we can eliminate all other candidates from those two cells.
			</p>
		</div>
	)
}
