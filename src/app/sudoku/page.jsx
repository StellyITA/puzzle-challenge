'use client'

import Link from 'next/link';
import Image from 'next/image';
import Grid from '../../components/Grid.jsx';

import SudokuMaker from '../../controllers/SudokuMaker.js'
const puzzleMaker = new SudokuMaker;

import pencilIcon from '/public/images/pencilmark.png';

import { useState, useEffect } from 'react';

export default function Sudoku() {

	const difficulties = ["Easy","Medium","Hard","Expert"];
	const numbers = Array.from({ length: 9 }, (v,i) => i + 1);
	const puzzleBorderColor = "border-indigo-dark";
	const focusedCellBorderColor = "border-orange-400";
	const darkTextColor = "text-indigo-dark";
	const guessTextColor = "text-gray-orange";
	const toggledButtonColor = "bg-blue-600 active:bg-blue-700 hover:bg-blue-700 border border-blue-800 text-white";
	const untoggledButtonColor = 'bg-indigo-50 active:bg-indigo-200 hover:bg-indigo-200 border border-indigo-300';
	const focusedPencilCellBg = ' bg-yellow-200'
	
	
	// States

	const [difficulty,setDiff] = useState(difficulties[0]);
	
	const [puzzle,setPuzzle] = useState({
		puzzle: [],
		removed: []
	});
	
	const [pencilmark,setPencilmark] = useState(false);
	
	
	//Hooks
	
	useEffect(() => {
		setPuzzle(puzzleMaker.getPuzzle(difficulty.toLowerCase()))
	}, []);
	
	
	//Event handlers
	
	const onDiffClick = (diff) => {
		if (pencilmark) {
			setPencilmark(false);
			const formArr = [...document.forms["sudoku-form"].elements];
			formArr.map((cell,i) => {
				if (cell.readOnly == true) {
					document.forms["sudoku-form"].elements[i].readOnly = false;
					document.forms["sudoku-form"].elements[i].className = document.forms["sudoku-form"].elements[i].className
					.replace(darkTextColor,guessTextColor)
					.replace(" text-[10px]","")
					.replace(' leading-none',"");
					document.forms["sudoku-form"].elements[i].value = '';
				}
			})
		}
		document.getElementById("sudoku-form").reset();
		document.getElementById("instruction").innerHTML = "Enjoy!";
		if (document.getElementById('focused-cell')) {
			document.getElementById('focused-cell').className = document.getElementById('focused-cell').className
			.replace(focusedCellBorderColor,puzzleBorderColor)
			.replace(focusedPencilCellBg,"");
			document.getElementById('focused-cell').id = '';
		}
		numbers.map(n => {
			document.getElementById('btn-' + n).className = document.getElementById('btn-' + n).className.replace(toggledButtonColor,untoggledButtonColor);
		})
		setDiff(diff);
		return setPuzzle(puzzleMaker.getPuzzle(diff.toLowerCase()));
	}
	
	const onKeyNumClick = (num) => {
		if (!document.getElementById('focused-cell')) {
			document.getElementById('instruction').innerHTML = 'Select cell first.';
		} else if (!document.getElementById('focused-cell').readOnly) {
			document.getElementById('focused-cell').value = num
		} else if (document.getElementById('focused-cell').readOnly) {
			let pencilArr = document.getElementById('focused-cell').value.split("");
			if (pencilArr.indexOf(num.toString()) == -1) {
				pencilArr[num + num - 2] = num;
				document.getElementById('btn-' + num).className = document.getElementById('btn-' + num).className.replace(untoggledButtonColor,toggledButtonColor);
			} else {
				pencilArr[num + num - 2] = ' ';
				document.getElementById('btn-' + num).className = document.getElementById('btn-' + num).className.replace(toggledButtonColor,untoggledButtonColor);
			}
			document.getElementById('focused-cell').value = pencilArr.join("");
		}
	}
	
	const onPencilClick = () => {
		if (!pencilmark) {
			setPencilmark(true);
			const formArr = [...document.forms["sudoku-form"].elements];
			formArr.map((cell,i) => {
				if (cell.value == "") {
					document.forms["sudoku-form"].elements[i].readOnly = true;
					document.forms["sudoku-form"].elements[i].className = document.forms["sudoku-form"].elements[i].className.replace(guessTextColor,darkTextColor) + " text-[10px]";
					document.forms["sudoku-form"].elements[i].value = 'click';
				}
			})
		} else if (document.getElementById('focused-cell')) {
			document.getElementById('focused-cell').readOnly = false;
			document.getElementById('focused-cell').value = "";
			document.getElementById('focused-cell').className = document.getElementById('focused-cell').className
			.replace(darkTextColor,guessTextColor)
			.replace(" text-[10px]","")
			.replace(' leading-none',"")
			.replace(focusedPencilCellBg,"");
			numbers.map(n => {
				document.getElementById('btn-' + n).className = document.getElementById('btn-' + n).className.replace(toggledButtonColor,untoggledButtonColor);
			})
		} else {
			document.getElementById('instruction').innerHTML = 'Select cell first.';
		}
	}
	
	return (
		<div className='h-screen'>
			<Link 
				href='/'
				className='ml-1 hover:text-indigo-900'
			>Home</Link>
				<div className='p-1 text-center border border-indigo-200 m-1 sm:mr-36 sm:ml-36 md:mr-48 md:ml-48 sm:mr-36 sm:ml-36 lg:mr-72 lg:ml-72 bg-yellow-50'>
					<p id='instruction'>Select difficulty.</p>
					00:00
				</div>
				<div className='grid grid-cols-4 sm:pr-36 sm:pl-36 md:pr-48 md:pl-48 lg:pr-80 lg:pl-80'>
					{difficulties.map(diff => (
						<button
							key={diff.toLowerCase()} 
							onClick={() => onDiffClick(diff)} 
							className={`m-2 p-1 ${diff != difficulty ? untoggledButtonColor : toggledButtonColor} rounded sm:text-sm`}
						>{diff}</button>
					))}
				</div>
				<div className='flex justify-center'>
					<Grid
						puzzleObj={puzzle}
						puzzleBorderColor={puzzleBorderColor}
						focusedCellBorderColor={focusedCellBorderColor}
						toggledButtonColor={toggledButtonColor}
						untoggledButtonColor={untoggledButtonColor}
						focusedPencilCellBg={focusedPencilCellBg}
					/>
				</div>
				<div className='flex justify-center'>
					{numbers.map(n => (
						<button
							id={'btn-' + n}
							onClick={() => onKeyNumClick(n)}
							key={"key-" + n} 
							className={`m-0.5 mt-3 p-3 pt-1 pb-1 ${untoggledButtonColor} rounded`}
						>{n}</button>
					))}
				</div>
				<button
					onClick={() => onPencilClick()}
					className={`${pencilmark ? "bg-blue-500 rounded-3xl p-2" : "p-2"} sticky bottom-0 m-4 sm:ml-24 lg:ml-72`}
				>
					<Image 
						src={pencilIcon}
						alt="Pencilmark"
					/>
				</button>
		</div>
	)
}
