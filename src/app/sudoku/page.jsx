'use client'

import Link from 'next/link';
import Image from 'next/image';
import Grid from '../../components/Grid.jsx';

import { getPuzzle } from '../../controllers/SudokuMaker.js'

import pencilIcon from '/public/images/pencilmark.png';

import { useState, useEffect, useRef } from 'react';

export default function Sudoku() {

	const difficulties = ["Easy","Medium","Hard","Expert"];
	const numbers = Array.from({ length: 9 }, (v,i) => i + 1);
	const puzzleBorderColor = "border-indigo-dark";
	const puzzleBgColor = "bg-yellow-50"
	const focusedCellBorderColor = "border-orange-400";
	const darkTextColor = "text-indigo-dark";
	const guessTextColor = "text-gray-orange";
	const toggledButtonColor = "bg-blue-600 active:bg-blue-700 hover:bg-blue-700 border border-blue-800 text-white";
	const untoggledButtonColor = 'bg-indigo-50 active:bg-indigo-200 hover:bg-indigo-200 border border-indigo-300';
	const focusedPencilCellBg = 'bg-yellow-200';
	const activePencilButton = " bg-blue-600 rounded-3xl";
	
	
	// States

	const [difficulty,setDiff] = useState(difficulties[0]);
	
	const [puzzle,setPuzzle] = useState({
		puzzle: [],
		removed: []
	});
	
	const [timer,setTimer] = useState(0);
	
	//Hooks
	
	const timerRef = useRef();
	
	useEffect(() => {
		setPuzzle(getPuzzle(difficulty.toLowerCase()))
	}, []);
	
	useEffect(() => {
		timerRef.current = setInterval(() => {
			setTimer(prev => prev + 1);
		}, 1000);
		return () => clearInterval(timerRef.current);
	}, [difficulty])
	
	const minutes = Math.floor(timer/60);
	const seconds = timer - minutes * 60;
	
	//Event handlers
	
	function onDiffClick(diff) {
		setTimer(0);
		document.getElementById("sudoku-form").reset();
		document.getElementById("instruction").innerHTML = "Enjoy!";
		let sudokuForm = [...document.forms['sudoku-form'].elements];
		sudokuForm.map((cell,cellIndex) => {
			if (cell.readOnly) {
				document.forms['sudoku-form'].elements[cellIndex].className = document.forms['sudoku-form'].elements[cellIndex].className
					.replace(focusedPencilCellBg,puzzleBgColor)
					.replace(darkTextColor,guessTextColor)
					.replace(" text-[10px]","")
					.replace(' leading-none',"");
					cell.readOnly = false;
			}
		});
		if (document.getElementById('focused-cell')) {
			document.getElementById('focused-cell').className = document.getElementById('focused-cell').className
				.replace(focusedCellBorderColor,puzzleBorderColor);
			document.getElementById('focused-cell').id = '';
		}
		numbers.map(n => {
			document.getElementById('btn-' + n).className = document.getElementById('btn-' + n).className.replace(toggledButtonColor,untoggledButtonColor);
		});
		document.getElementById('pencil-button').className = document.getElementById('pencil-button').className.replace(activePencilButton,"");
		setDiff(diff);
		return setPuzzle(getPuzzle(diff.toLowerCase()));
	}
	
	function onKeyNumClick(num) {
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
	
	function onPencilClick(pencil) {
		let focusedCell;
		if (document.getElementById('focused-cell')) {
			focusedCell = document.getElementById('focused-cell');
			focusedCell.readOnly = focusedCell.readOnly ? !focusedCell.readOnly : true;
			if (focusedCell.readOnly) {
				pencil.className += activePencilButton;
				const pencilArr = [" "," "," "," "," ","\n"," "," "," "," "," ","\n"," "," "," "," "," "];
				focusedCell.value = pencilArr.join("");
				focusedCell.className = focusedCell.className
					.replace(guessTextColor,darkTextColor)
					.replace(puzzleBgColor,focusedPencilCellBg) + " text-[10px] leading-none";
			} else {
				focusedCell.value = "";
				focusedCell.className = focusedCell.className
					.replace(darkTextColor,guessTextColor)
					.replace(" text-[10px]","")
					.replace(' leading-none',"")
					.replace(focusedPencilCellBg,puzzleBgColor);
					pencil.className = pencil.className.replace(activePencilButton,"");
					numbers.map(n => {
						document.getElementById('btn-' + n).className = document.getElementById('btn-' + n).className.replace(toggledButtonColor,untoggledButtonColor)
					})
			}
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
					{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
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
						puzzleBgColor={puzzleBgColor}
						activePencilButton={activePencilButton}
						timerRef={timerRef}
					/>
				</div>
				<div className='flex justify-center'>
					<div className='grid grid-cols-5'>
						<button
							id='pencil-button'
							onClick={(event) => onPencilClick(event.currentTarget)}
							className='justify-self-center my-2 px-1'
						>
							<Image 
								className=''
								src={pencilIcon}
								alt="Pencilmark"
							/>
						</button>
						{numbers.map(n => (
							<button
								id={'btn-' + n}
								onClick={() => onKeyNumClick(n)}
								key={"key-" + n} 
								className={`mr-3 ml-1 mt-3 px-7 pr-9 sm:pr-7 py-1 ${untoggledButtonColor} rounded`}
							>{n}</button>
						))}
					</div>
				</div>
		</div>
	)
}
