import Image from 'next/image';
import pencilMarkExample from '/public/images/tutorials/pencilmarks.png'

export default function pencilMarks() {
	return (
		<>
			<h1 className='text-4xl text-center'>Pencil Marks</h1>
			<div className='grid m-5 text-justify bg-yellow-50 p-1 px-2 border border-indigo-200'>
				<Image
					src={pencilMarkExample}
					alt='Pencil Marks Example'
					className='place-self-center'
				/>
				<p className='p-5'>Pencil marks, also known as candidate numbers or possibilities, are small numbers that players write in the cells of a Sudoku grid. These marks represent potential numbers that could be placed in a particular cell, based on the existing numbers in the same row, column, and 3x3 subgrid.</p>
				
				<p className='p-5'>To use the pencil mark feature of this application, first select the cell where you want to write the numbers. Then, press the pencil icon near the numerical keyboard. The selected cell background color will change to a bright orange, and you can write your pencil marks.</p>
			
			</div>
		</>
	)
}
