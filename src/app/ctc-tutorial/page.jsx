import Link from 'next/link';
import Image from 'next/image';
import crackTheCodeExample from '/public/images/tutorials/crack-the-code.png'

export default function crackTheCode() {
	return (
		<div className='grid'>
			<Link 
				href='/'
				className='hover:text-indigo-900 active:text-indigo-900'
			>Home</Link>
			<h1 className='text-center text-4xl'>Crack the Code</h1>
			<div className='grid m-5 text-justify bg-yellow-50 p-1 px-2 border border-indigo-200'>
				<Image
					src={crackTheCodeExample}
					alt='Crack the Code Example'
					className='place-self-center'
				/>
				<p className='p-5'>Crack the Code is a logic-based deduction game where players try to guess a secret code within a certain number of attempts. The goal is to figure out the correct combination of numbers that make up the hidden code.</p>

				<p className='p-5'>The game will create a secret code, and you'll attempt to guess it. After each guess, the game will provide feedback to help you narrow down the possibilities. The feedback consists of hints, indicating whether the guessed elements are in the correct position, or if they exist in the code but are in the wrong position.</p>

				<p className='p-5'>There are 4 difficulties in this app:</p>
				
				<ul className='px-5 pb-5'>
					<li>- Easy: every number is unique, no repetition.</li>
					<li>- Medium: max 2 of every number.</li>
					<li>- Hard: max 3 of every number.</li>
					<li>- Expert: no repetition limit.</li>
				</ul>
				
				<p className='p-5'>So, go ahead and test your skills at different difficulty levels, from the straightforward 'Easy' mode to the challenging 'Expert' mode. Sharpen your mind, embrace the excitement, and relish the satisfaction of discovering the secret codes.</p>
			</div>
			<button className='place-self-center text-lg text-white w-1/2 mb-1 pb-1 bg-blue-600 rounded border border-blue-800 hover:bg-blue-700 active:bg-blue-700'>Play Crack the Code</button>
		</div>
	)
}
