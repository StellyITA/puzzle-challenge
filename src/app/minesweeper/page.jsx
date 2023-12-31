'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share'

import { useSound } from 'use-sound';
import { getMatrix, getClues, getAdjacent } from "../../controllers/mineSweeper.js";
import flagBtn from '/public/images/flag-btn.png';

export default function Minesweeper() {
	
	const difficulties = ["Easy","Medium","Hard","Expert"];
	
	
	// Audio
	
	const fireSound = '/sounds/fire.wav';
	const explosionSound = '/sounds/explosion.wav';
	const winSound = '/sounds/harp-win.mp3'
	const [fireAudio] = useSound(fireSound, { volume: 0.2 });
	const [explosionAudio] = useSound(explosionSound);
	const [winAudio] = useSound(winSound);
	
	
	// Styles
	
	const winTileBg = `bg-[url('/images/win-tile.png')]`;
	const bombTileBg = `bg-[url('/images/exploding-bomb.png')]`;
	const bombTile2Bg = `bg-[url('/images/exploding-bomb-2.png')]`;
	const explosionTileBg = `bg-[url('/images/explosion.png')]`;
	const flagTileBg = `bg-[url('/images/flag.png')]`;
	const toggledButtonColor = "bg-blue-600 active:bg-blue-700 hover:bg-blue-700 border border-blue-800 text-white";
	const untoggledButtonColor = 'bg-indigo-200 active:bg-indigo-300 hover:bg-indigo-300 border border-indigo-400';
	
	
	// States
	
	const [difficulty,setDifficulty] = useState(difficulties[0]);
	const [board,setBoard] = useState(getMatrix(difficulty));
	const [start,startStop] = useState(false);
	const [clicked,setClicked] = useState("");
	const [end,setEnd] = useState(false);
	const [timer,setTimer] = useState(0);
	const [flag,setFlag] = useState(false);
	const [win,setWin] = useState(false);
	
	
	// Hooks
	
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
				const coveredCells = document.getElementsByClassName("border-green-900 bg-yellow-50").length;
				const flaggedCells = document.getElementsByClassName(flagTileBg + " bg-no-repeat bg-cover").length;
				if ((coveredCells + flaggedCells) == mines) {
					board.map((row,y) => row.map((cell,x) => {
						if (cell == "M") {
							document.getElementById(x + "," + y).className = winTileBg;
							document.getElementById(x + "," + y).onclick = "";
							clearInterval(timerRef.current);
							winAudio();
							setWin(true);
							return setEnd(true);
						}
					}));
				}
			} else {
				clearInterval(timerRef.current);
				document.getElementById(coord[0] + "," + coord[1]).className = bombTileBg + " bg-no-repeat bg-cover";
				fireAudio();
				setTimeout(() => {
					document.getElementById(coord[0] + "," + coord[1]).className = bombTile2Bg + " bg-no-repeat bg-cover";
				},150);
				setTimeout(() => {
					document.getElementById(coord[0] + "," + coord[1]).className = bombTileBg + " bg-no-repeat bg-cover";
				},300);
				setTimeout(() => {
					document.getElementById(coord[0] + "," + coord[1]).className = bombTile2Bg + " bg-no-repeat bg-cover";
				},450);
				setTimeout(() => {
					document.getElementById(coord[0] + "," + coord[1]).className = bombTileBg + " bg-no-repeat bg-cover";
				},600);
				setTimeout(() => {
					document.getElementById(coord[0] + "," + coord[1]).className = explosionTileBg + " bg-no-repeat bg-cover";
				explosionAudio();
				},750);
				setTimeout(() => {
					document.getElementById(coord[0] + "," + coord[1]).className = "bg-gray-900";
				},1000);
				return setEnd(true);
			}
		}
	},[clicked]);
	
	
	// Event Handlers
	
	function uncoverCells(x,y) {
		const cell = document.getElementById(x + "," + y);
		cell.className = cell.className.replace("bg-yellow-50 hover:bg-green-200 shadow-[inset_1px_-1px_10px_#88BB88] active:shadow-[inset_-1px_1px_5px_#669966]","bg-green-400");
		cell.disabled = true;
		if (cell.value != 0) {
			cell.innerHTML = cell.value;
		} else {
			const adjArr = getAdjacent(y,x,difficulty);
			const checked = [];
			while (adjArr.length > 0) {
				const checkCoord = adjArr.shift();
				checked.push(JSON.stringify(checkCoord));
				const checkCell = document.getElementById(checkCoord.x + "," + checkCoord.y);
				checkCell.className = checkCell.className.replace("bg-yellow-50 hover:bg-green-200 shadow-[inset_1px_-1px_10px_#88BB88] active:shadow-[inset_-1px_1px_5px_#669966]","bg-green-400");
				checkCell.disabled = true;
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
	
	function handleFlag(x,y) {
		const cell = document.getElementById(x + "," + y);
		if (cell.className == flagTileBg + " bg-no-repeat bg-cover") {
			cell.className = "aspect-square border border-green-900 bg-yellow-50 hover:bg-green-200 shadow-[inset_1px_-1px_10px_#88BB88] active:shadow-[inset_-1px_1px_5px_#669966]";
		} else {
			cell.className = flagTileBg + " bg-no-repeat bg-cover";
		}
	}
	
	function onFlagClick() {
		const flagBtn = document.getElementById("flag");
		return setFlag(prev => !prev);
	}
	
	function onDiffClick(diff) {
		clearInterval(timerRef.current);
		setTimer(0);
		board.map((row,y) => row.map((cell,x) => {
			document.getElementById(x + "," + y).className = 'aspect-square border border-green-900 bg-yellow-50 hover:bg-green-200 shadow-[inset_1px_-1px_10px_#88BB88] active:shadow-[inset_-1px_1px_5px_#669966]';
			document.getElementById(x + "," + y).innerHTML = "";
			document.getElementById(x + "," + y).disabled = false;
		}));
		setDifficulty(diff);
		setBoard(getMatrix(diff));
		startStop(false);
		setClicked("");
		setFlag(false);
		setWin(false);
		return setEnd(false);
	}
	
	let minutes = Math.floor(timer / 60);
	let seconds = timer - (minutes * 60);
	
	return (
		<div className="grid">
			<div className='grid grid-cols-2'>
				<Link 
					href='/'
					className='justify-self-start px-5 hover:text-indigo-900 active:text-indigo-900'
				>Home</Link><Link 
					href='/minesweeper-tutorial'
					className='justify-self-end px-5 hover:text-indigo-900 active:text-indigo-900'
				>Tutorial</Link>
			</div>
			<div className='font-digital p-1 text-center border border-indigo-200 m-1 sm:mr-36 sm:ml-36 md:mr-48 md:ml-48 sm:mr-36 sm:ml-36 lg:mr-72 lg:ml-72 bg-yellow-50'>
					{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
				
						{win ? (<div 
							id='share-buttons'
							className='place-content-center'
						><FacebookShareButton 
							url={`https://puzzle-challenge.vercel.app/minesweeper,${difficulty},${minutes},${seconds}`}
							hashtag={'#minesweeper'}
						>
							<FacebookIcon size={32} round className='my-1'/>
						</FacebookShareButton></div>) : ""}
				
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
			<button 
				onClick={() => onFlagClick()}
				className={`justify-self-center py-1 px-0.5 pr-1.5 ${flag ? "rounded-3xl bg-blue-400" : ""}`}
				id="flag"
			><Image 
				src={flagBtn}
				alt="Flag Button"
			/></button>
			<div className={`place-self-center grid grid-cols-10 landscape:w-[27%] portrait:w-[100%] m-1 border border-green-900`}>
				{board.map((row,y) => row.map((cell,x) => <button 
					className="aspect-square border border-green-900 bg-yellow-50 hover:bg-green-200 shadow-[inset_1px_-1px_10px_#88BB88] active:shadow-[inset_-1px_1px_5px_#669966]"
					onClick={() => !start ? onFirstClick(x,y) : !flag ? onClick(x,y) : handleFlag(x,y)}
					id={x + "," + y}
					value={cell}
					key={x + "," + y}
					disabled={end}
				></button>))}
			</div>
		</div>
	)
}
