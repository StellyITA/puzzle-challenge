'use client'

import { useState, useEffect, useRef } from 'react';

import { getMatrix, getClues, getAdjacent } from "../../controllers/mineSweeper.js";

export default function Minesweeper() {
	
	const difficulties = ["Easy","Medium","Hard","Expert"];
	
	const winTileBg = `bg-[url('/images/win-tile.png')]`;
	const bombTileBg = `bg-[url('/images/exploding-bomb.png')]`;
	const toggledButtonColor = "bg-blue-600 active:bg-blue-700 hover:bg-blue-700 border border-blue-800 text-white";
	const untoggledButtonColor = 'bg-indigo-200 active:bg-indigo-300 hover:bg-indigo-300 border border-indigo-400';
	
	const [difficulty,setDifficulty] = useState(difficulties[0]);
	const [board,setBoard] = useState(getMatrix());
	const [start,startStop] = useState(false);
	const [clicked,setClicked] = useState("");
	const [end,setEnd] = useState(false);
	const [timer,setTimer] = useState(0);
	
	const timerRef = useRef();
	
	useEffect(() => {
		if (start) {
			timerRef.current = setInterval(() => {
				setTimer(prev => prev + 1);
			}, 1000);
			return () => clearInterval(timerRef.current);
		}
	},[start]);
	
	useEffect(() => {
		if (clicked != "") {
			const coord = clicked.split(",");
			const mines = board.reduce((acc,row) => acc.concat(row)).filter(cell => cell == "M").length
			if (board[coord[1]][coord[0]] != "M") {
				uncoverCells(coord[0],coord[1]);
				const coveredCells = document.getElementsByClassName("bg-green-50").length;
				if (coveredCells == mines) {
					board.map((row,y) => row.map((cell,x) => {
						if (cell == "M") {
							document.getElementById(x + "," + y).className = winTileBg;
							document.getElementById(x + "," + y).onclick = "";
							clearInterval(timerRef.current);
							return setEnd(true);
						}
					}));
				}
			} else {
				document.getElementById(coord[0] + "," + coord[1]).className = bombTileBg + " bg-no-repeat bg-cover";
				clearInterval(timerRef.current);
				return setEnd(true);
			}
		}
	},[clicked]);
	
	function uncoverCells(x,y) {
		const cell = document.getElementById(x + "," + y);
		cell.className = cell.className.replace("bg-green-50 hover:bg-green-200 shadow-[inset_1px_-1px_10px_#88BB88] active:shadow-[inset_-1px_1px_5px_#669966]","bg-green-400");
		cell.onclick = "";
		if (cell.value != 0) {
			cell.innerHTML = cell.value;
		} else {
			const adjArr = getAdjacent(y,x,difficulty);
			const checked = [];
			while (adjArr.length > 0) {
				const checkCoord = adjArr.shift();
				checked.push(JSON.stringify(checkCoord));
				const checkCell = document.getElementById(checkCoord.x + "," + checkCoord.y);
				checkCell.className = checkCell.className.replace("bg-green-50 hover:bg-green-200 shadow-[inset_1px_-1px_10px_#88BB88] active:shadow-[inset_-1px_1px_5px_#669966]","bg-green-400");
				checkCell.onclick = "";
				if (checkCell.value != 0) {
					checkCell.innerHTML = checkCell.value;
				} else {
					const newAdj = getAdjacent(checkCoord.y,checkCoord.x,difficulty);
					newAdj.map(adj => {
						if (checked.indexOf(JSON.stringify(adj)) == -1) {
							adjArr.push(adj);
						}
					})
				}
			}
		}
	}
	
	function onFirstClick(x,y) {
		const click = x + "," + y;
		setBoard(getClues(difficulty,click));
		setClicked(click);
		return startStop(true);
	}
	
	function onClick(x,y) {
		const click = x + "," + y;
		return setClicked(click);
	}
	
	function onDiffClick(diff) {
		clearInterval(timerRef.current);
		setTimer(0);
		board.map((row,y) => row.map((cell,x) => {
			document.getElementById(x + "," + y).className = 'aspect-square border border-green-900 bg-green-50 hover:bg-green-200 shadow-[inset_1px_-1px_10px_#88BB88] active:shadow-[inset_-1px_1px_5px_#669966]';
			document.getElementById(x + "," + y).innerHTML = "";
		}));
		setDifficulty(diff);
		setBoard(getMatrix());
		startStop(false);
		setClicked("");
		return setEnd(false);
	}
	
	let minutes = Math.floor(timer / 60);
	let seconds = timer - (minutes * 60);
	
	return (
		<div className="grid">
			<div className='font-digital p-1 text-center border border-indigo-200 m-1 sm:mr-36 sm:ml-36 md:mr-48 md:ml-48 sm:mr-36 sm:ml-36 lg:mr-72 lg:ml-72 bg-yellow-50'>
					{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
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
			<div className={`place-self-center grid grid-cols-10 aspect-square landscape:w-[40%] portrait:w-[100%] m-1 border border-green-900`}>
				{board.map((row,y) => row.map((cell,x) => <button 
					className="aspect-square border border-green-900 bg-green-50 hover:bg-green-200 shadow-[inset_1px_-1px_10px_#88BB88] active:shadow-[inset_-1px_1px_5px_#669966]"
					onClick={() => !start ? onFirstClick(x,y) : onClick(x,y)}
					id={x + "," + y}
					value={cell}
					key={x + "," + y}
					disabled={end}
				></button>))}
			</div>
		</div>
	)
}