import Image from 'next/image';

import xyWingExample from '/public/images/tutorials/y-wing.png';

export default function xyWing() {
	return (
		<div>
			<h1 className='text-4xl text-center p-10 pt-0'>XY Wing</h1>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>
				The XY-Wing technique is an advanced-level Sudoku solving technique that involves identifying a specific pattern of three cells that contain the same three candidate numbers. One cell is called the pivot and contains only the candidates x and y. The other two cells are the pincers, and each of them contains one of the candidates plus one more that they have in common, xz and yz, and they share the row, column or subgrid with the pivot. Regardless of whether the pivot is x or y, you can be certain that one of the pincers must be z. So, if there are cells that share the same row, column, or subgrid with both pincers, we can confidently remove the candidate z from those cells.
				<Image 
					src={xyWingExample}
					alt='xyWing Example'
					className='place-self-center p-1'
				/>
				In this example, the pivot is the highlighted cell with candidates 1 and 6, while the other two cells are the pincers. One of the pincers contains candidates 1 and 5 and is in the same subgrid as the pivot, while the other cell (with candidate numbers 5 and 6) is in the same column as the pivot. Since 5 must be in one of the two pincers, we can remove it from the candidates of the two cells that share the subgrid with one pincer and the column with the other.
			</p>
		</div>
	)
}
