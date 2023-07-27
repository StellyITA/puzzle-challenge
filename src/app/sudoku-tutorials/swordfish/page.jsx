import Image from 'next/image';

import swordfishExample1 from '/public/images/tutorials/swordfish1.png';
import swordfishExample2 from '/public/images/tutorials/swordfish2.png';

export default function swordfish() {
	return (
		<div>
			<h1 className='text-4xl text-center p-10 pt-0'>Swordfish</h1>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>
				 The Swordfish technique is a powerful method for solving Sudoku puzzles. It involves finding a specific pattern of candidate numbers that appears in three rows and three columns, forming a configuration known as a "swordfish." The swordfish pattern occurs when one candidate number appears in the same three columns or rows respectively in no more than three different rows or columns. Let's look at an example to better understand the concept: 
				<Image 
					src={swordfishExample1}
					alt='Swordfish Example Part 1'
					className='place-self-center p-1'
				/>
				In the second, sixth, and eighth columns, the candidate 4 can only be found in the second, fourth, and fifth rows, respectively. This means that in each of these three rows, the candidate 4 must be in one of those three cells. Knowing this, we can confidently remove the candidate 4 from all the other cells in the same rows.
				<Image 
					src={swordfishExample2}
					alt='Swordfish Example Part 2'
					className='place-self-center p-1 pt-5'
				/>
				In this example, the pattern is 3-3-3, but it's not always like this. You can find 2-2-2 (divided in three different rows/columns too), 2-2-3 and 2-3-3 patterns too. 
			</p>
		</div>
	)
}
