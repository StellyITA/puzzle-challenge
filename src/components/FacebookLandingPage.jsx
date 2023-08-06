import Link from 'next/link';

export default function FacebookLandingPage() {
	return (
		<div className='h-screen grid place-content-center content-center bg-mosaic'>
			<h1 className='text-4xl text-center pb-5'>Welcome to Puzzle Challenge!</h1>
			<Link 
				href='/'
				className='bg-blue-600 border border-blue-800 text-center rounded mx-10 py-5 text-2xl text-white hover:bg-blue-700 hover:border-blue-900 active:bg-blue-700 active:border-blue-900'
			>Choose a Game</Link>
		</div>
	)
}
