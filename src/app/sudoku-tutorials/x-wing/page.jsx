import Image from 'next/image';

import xWingExample1 from '/public/images/tutorials/x-wing.png';
import xWingExample2 from '/public/images/tutorials/x-wing2.png';

export default function xWing() {
	return (
		<div>
			<h1 className='text-4xl text-center p-10 pt-0'>X Wing</h1>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>
				The X-Wing technique is an advanced-level Sudoku solving technique that involves identifying a specific pattern of the same candidate number in two rows and two columns, forming the shape of an "X" on the puzzle grid. Once identified, you can use this pattern to eliminate candidate numbers from other cells in the same rows or columns, helping you solve the puzzle. When you find two rows or two columns with exactly two cells that share the same candidate number and are in the same two columns or rows, respectively, you have discovered the X-Wing pattern. Now, you can remove the candidate number from the other cells in the same columns or rows. Here's an example: 
				<Image 
					src={xWingExample1}
					alt='xWing Example Part 1'
					className='place-self-center p-1'
				/>
				In the example above, we can see that in the third and eighth rows the candidate number 2 appears only twice, and in the same two columns: the second and the ninth. This means that the number 2 must be in two of these cells, allowing us to remove the candidate 2 from the other cells in the same columns:
				<Image 
					src={xWingExample2}
					alt='xWing Example Part 2'
					className='place-self-center p-1 pt-5'
				/>
			</p>
		</div>
	)
}
