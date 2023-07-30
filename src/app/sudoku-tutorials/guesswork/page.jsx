import Image from 'next/image';

import guessworkExample1 from '/public/images/tutorials/guesswork1.png';
import guessworkExample2 from '/public/images/tutorials/guesswork2.png';
import guessworkExample3 from '/public/images/tutorials/guesswork3.png';

export default function guesswork() {
	return (
		<div>
			<h1 className='text-4xl text-center p-10 pt-0'>Guesswork</h1>
			<p className='grid bg-yellow-50 p-1 px-2 border border-indigo-200'>
				  The guesswork Sudoku technique, also known as trial and error, is a last-resort method used when all other logical solving techniques have been exhausted, and the puzzle remains unsolvable. It involves making educated guesses for a cell's value and then continuing to solve the puzzle based on those guesses. However, it's important to be cautious as incorrect guesses may lead to inconsistencies or contradictions. Before resorting to guesswork, make sure you have applied all the available logical techniques, such as Single Possibility, Naked Pairs, Hidden Pairs, X-Wing, Swordfish, etc. These techniques should be sufficient to solve the majority of Sudoku puzzles. Let's see an example:
				<Image 
					src={guessworkExample1}
					alt='Guesswork Example Part 1'
					className='place-self-center p-1'
				/>
				If the puzzle remains unsolved after applying all logical techniques, carefully examine the cells with the fewest candidates. These are often the best candidates for guesswork since there are fewer possibilities to consider. In this example, we choose the highlighted cell with candidates 2 and 8. Now we'll try removing the number 8:
				<Image 
					src={guessworkExample2}
					alt='Guesswork Example Part 2'
					className='place-self-center p-1 pt-5'
				/>
				As you can see, the number 2 in that particular cell has led to a contradiction. Therefore, that cell's value must be 8:
				<Image 
					src={guessworkExample3}
					alt='Guesswork Example Part 3'
					className='place-self-center p-1 pt-5'
				/>
			</p>
		</div>
	)
}
