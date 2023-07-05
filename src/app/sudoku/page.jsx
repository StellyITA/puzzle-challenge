'use client'

import Link from 'next/link';
import Image from 'next/image';
import Grid from '../../components/Grid.jsx';

import pencilIcon from '/public/images/pencilmark.png';

import { useState } from 'react';

export default function Sudoku() {

	const difficulties = ["Easy","Medium","Hard","Expert"];

	const [difficulty,setDiff] = useState(difficulties[0]);
	
	const numbers = Array.from({ length: 9 }, (v,i) => i + 1);
	
	return (
		<div className='h-screen'>
			<Link 
				href='/'
				className='ml-1 hover:text-indigo-900'
			>Back</Link>
				<div className='text-center border border-indigo-200 m-1 sm:mr-36 sm:ml-36 md:mr-48 md:ml-48 sm:mr-36 sm:ml-36 lg:mr-72 lg:ml-72 bg-yellow-50'>
					Select difficulty.
					<br/>
					00:00
				</div>
				<div className='grid grid-cols-4 sm:pr-36 sm:pl-36 md:pr-48 md:pl-48 lg:pr-80 lg:pl-80'>
					{difficulties.map(diff => (
						<button className={`m-2 p-1 ${diff != difficulty ? "bg-indigo-50 active:bg-indigo-200 hover:bg-indigo-200 border border-indigo-300" : "bg-blue-600 active:bg-blue-700 hover:bg-blue-700 border border-blue-800 text-white"} rounded sm:text-sm`}>{diff}</button>
					))}
				</div>
				<div className='flex justify-center'>
					<Grid/>
				</div>
				<div className='flex justify-center'>
					{numbers.map(n => (
						<button className='m-0.5 mt-3 p-3 pt-1 pb-1 bg-indigo-50 active:bg-indigo-200 hover:bg-indigo-200 border border-indigo-300 rounded'>{n}</button>
					))}
				</div>
				<button>
					<Image 
						src={pencilIcon}
						className="m-4 sm:ml-36 lg:ml-80"
					/>
				</button>
		</div>
	)
}
