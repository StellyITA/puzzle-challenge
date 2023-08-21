import Link from 'next/link';
import Image from 'next/image';
import minesweeperExample from '/public/images/tutorials/minesweeper.png'

export default function crackTheCode() {
	return (
		<div className='grid'>
			<Link 
				href='/'
				className='hover:text-indigo-900 active:text-indigo-900'
			>Home</Link>
			<h1 className='text-center text-4xl'>Minesweeper</h1>
			<div className='grid m-5 text-justify bg-yellow-50 p-2 px-2 border border-indigo-200'>
				<Image
					src={minesweeperExample}
					alt='Minesweeper Example'
					className='place-self-center'
				/>
				<p className='p-5'>Minesweeper is a classic puzzle game that involves revealing tiles on a grid while avoiding hidden mines. The goal of Minesweeper is to clear the game grid by revealing all tiles that do not contain mines. Be careful not to uncover any mines, as doing so will end the game.</p>

				<p className='p-5'>You'll be presented with a grid of covered tiles. Left-click (or tap) on a tile to reveal it.

    Each revealed tile will show a number or be blank:
        Numbers indicate how many mines are adjacent to the tile, including diagonally. For example, if a tile shows "1," it means there's one mine nearby.
        If a tile is blank, there are no mines adjacent to it. Revealing a blank tile will trigger an area of connected blank tiles to be revealed.</p>

    <p className='p-5'>Click on the flag icon on top and then on a tile to mark it with a flag if you suspect it contains a mine. This is a way to help keep track of potential mine locations.

    Continue revealing tiles and using the number clues to deduce where mines might be located. Use logic and process of elimination to gradually clear the grid.</p>

				<p className='p-5'>There are 4 difficulties in this app:</p>
				
				<ul className='px-5 pb-5'>
					<li>- Easy: 10x10 grid with 10 mines.</li>
					<li>- Medium: 10x11 grid with 13 mines.</li>
					<li>- Hard: 10x12 grid with 16 mines.</li>
					<li>- Expert: 10x13 grid with 20 mines.</li>
				</ul>
				
				<ul className='p-5'>The game can end in one of the following ways:

    <li>If you reveal a tile with a mine, the game ends immediately, and you lose.</li>
    <li>If you've successfully revealed all tiles without hitting any mines, you win!</li></ul>
			</div>
			<Link 
				className='place-self-center text-3xl text-white mb-1 pb-1 px-1 bg-blue-600 rounded border border-blue-800 hover:bg-blue-700 active:bg-blue-700'
				href='/minesweeper'
			>Play Minesweeper</Link>
		</div>
	)
}
