'use client'

import { useSound } from 'use-sound';
import { useState } from 'react';
import Link from 'next/link';

import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share'

export default function crackTheCode() {
	
	function getCode(difficulty) {
	let numsArr = Array.from({length: 10}, (v,i) => i);
	let codeLength;
	if (difficulty == "Easy") {
		codeLength = 3;
	} else if (difficulty == "Medium") {
		numsArr = numsArr.concat(numsArr);
		codeLength = 4;
	} else if (difficulty == "Hard") {
		numsArr = numsArr.concat(numsArr).concat(numsArr);
		codeLength = 5;
	} else {
		codeLength = 6;
	}
	let code = [];
	while (code.length < codeLength) {
		if (difficulty != "Expert") {
			const randomIndex = Math.floor(Math.random() * numsArr.length);
			code.push(numsArr[randomIndex]);
			numsArr.splice(randomIndex,1);
		} else {
			code.push(Math.floor(Math.random() * 10));
		}
	}
	return code.join("");
}
	
	const correctCode = '/sounds/correct-code.mp3';
	const wrongCode = '/sounds/wrong-code.mp3';
	const openSafe = '/sounds/open-safe.wav';
	const safeKeyPress = '/sounds/safe-key-press.wav';
	const del = '/sounds/delete.wav';
	
	const keyboardArr = Array.from({ length: 9 }, (v,i) => i + 1);
	keyboardArr.splice(3,0,"Open");
	keyboardArr.splice(7,0,0);
	keyboardArr.push("Del");
	
	const difficulties = ["Easy","Medium","Hard","Expert"];
	
	
	// Styles
	
	const wrongLightOff = "bg-[#400000]";
	const rightLightOff = "bg-[#004000]";
	const wrongLightOn = "bg-gradient-to-tr from-red-600 to-red-400 blur-[1px]";
	const rightLightOn = "bg-gradient-to-tr from-green-600 to-green-400 blur-[1px]";
	const toggledButtonColor = "bg-blue-600 active:bg-blue-700 hover:bg-blue-700 border border-blue-800 text-white";
	const untoggledButtonColor = 'bg-indigo-200 active:bg-indigo-300 hover:bg-indigo-300 border border-indigo-400';
	
	
	// States
	
	const [code,setCode] = useState(getCode("Easy"));
	const [guess,setGuess] = useState("");
	const [difficulty,setDiff] = useState(difficulties[0]);
	const [attempts,setAttempts] = useState(7);
	const [safeIsOpen,setSafeIsOpen] = useState(false);
	
	
	// Hooks
	
	const [correctCodePlay] = useSound(correctCode);
	const [wrongCodePlay] = useSound(wrongCode);
	const [openSafePlay] = useSound(openSafe);
	const [safeKeyPressPlay] = useSound(safeKeyPress, { volume: 0.1 });
	const [delPlay] = useSound(del);
	
	// Event Handlers
	
	function onKeyClick(k) {
		document.getElementById("wrong-light").className = document.getElementById("wrong-light").className.replace(wrongLightOn,wrongLightOff);
		document.getElementById("right-light").className = document.getElementById("right-light").className.replace(rightLightOn,rightLightOff);
		if (typeof k == "number" && guess.length < code.length) {
			setGuess(prev => prev + k);
			safeKeyPressPlay();
		} else if (k == "Del") {
			delPlay();
			setGuess(prev => {
				let guessArr = prev.split("");
				guessArr.pop();
				return guessArr.join("");
			});
		} else if (k == "Open") {
			if (guess != code && attempts > 0) {
				setAttempts(prev => prev - 1);
				wrongCodePlay();
				document.getElementById("wrong-light").className = document.getElementById("wrong-light").className.replace(wrongLightOff,wrongLightOn);
				let sameNumSameIndex = 0;
				let sameNumDiffIndex = 0;
				let hintString = "";
				let codeArr = code.split("");
				let guessArr = guess.split("");
				for (let i in guessArr) {
					if (guessArr[i] == codeArr[i]) {
						sameNumSameIndex++;
						guessArr[i] = "checked";
						codeArr[i] = "checked";
					}
				}
				for (let i in guessArr) {
					if (codeArr.indexOf(guessArr[i]) != -1 && guessArr[i] != "checked") {
						sameNumDiffIndex++;
						codeArr[codeArr.indexOf(guessArr[i])] = "checked";
						guessArr[i] = "checked";
					}
				}
				if (attempts > 1) {	
					let hintParagraph = document.createElement("p");
					hintParagraph.className = "p-1";
					hintString = `${guess} - ${sameNumSameIndex} number${sameNumSameIndex > 1 || sameNumSameIndex == 0 ? "s" : ""} ${sameNumSameIndex > 1 || sameNumSameIndex == 0 ? "are" : "is"} right and in the correct position, ${sameNumDiffIndex} number${sameNumDiffIndex > 1 || sameNumDiffIndex == 0 ? "s" : ""} ${sameNumDiffIndex > 1 || sameNumDiffIndex == 0 ? "are" : "is"} right but in the wrong position.`
					hintParagraph.textContent = hintString;
					document.getElementById("hints").append(hintParagraph);
					window.scrollTo(0,document.body.scrollHeight);
					setGuess("");
				} else {
					setGuess("Err");
				}
			} else if (guess == code) {
				setSafeIsOpen(true);
				openSafePlay();
				document.getElementById("handle").className = "rotate-90 " + document.getElementById("handle").className.replace('shadow-[inset_5px_-5px_10px_#9090a0]',"shadow-[inset_-5px_-5px_10px_#9090a0]");
				document.getElementById("right-light").className = document.getElementById("right-light").className.replace(rightLightOff,rightLightOn);
				setTimeout(correctCodePlay,750);
			}
		}
	}
	
	function onDiffClick(diff) {
		setSafeIsOpen(false);
		document.getElementById("handle").className = document.getElementById("handle").className.replace('shadow-[inset_-5px_-5px_10px_#9090a0]','shadow-[inset_5px_-5px_10px_#9090a0]').replaceAll("rotate-90 ","");
		document.getElementById("wrong-light").className = document.getElementById("wrong-light").className.replace(wrongLightOn,wrongLightOff);
		document.getElementById("right-light").className = document.getElementById("right-light").className.replace(rightLightOn,rightLightOff);
		document.getElementById('hints').innerHTML = "";
		setGuess("");
		setCode(getCode(diff));
		setDiff(diff);
		switch (diff) {
			case "Easy":
				setAttempts(7);
				break;
			case "Medium":
				setAttempts(8);
				break;
			case "Hard":
				setAttempts(9);
				break;
			default:
				setAttempts(10);
		}
	}
	
	
	return (
		<div className='grid'>
			<div className='grid grid-cols-2'>
				<Link 
					href='/'
					className='justify-self-start px-5 hover:text-indigo-900 active:text-indigo-900'
				>Home</Link><Link 
					href='/ctc-tutorial'
					className='justify-self-end px-5 hover:text-indigo-900 active:text-indigo-900'
				>Tutorial</Link>
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
			<div className='sticky top-0'>
				<div className='grid grid-cols-3 bg-gray-700 p-1 m-1 rounded-xl lg:p-10 lg:mx-52 xl:mx-64'>
					<div>
						<span 
							id="wrong-light"
							className={`shadow-[1px_-1px_1px_0px_#2A2A3F] border border-[#2A2A3F] m-2 px-2.5 rounded-[100%] ${wrongLightOff}`}
						/>
						<span
							id="right-light" 
							className={`shadow-[1px_-1px_1px_0px_#2A2A3F] border border-[#2A2A3F] m-2 px-2.5 rounded-[100%] ${rightLightOff}`}
						/>
					</div> 
					<div className="relative shadow-[1px_-1px_1px_1px_#0A0A1F] border border-[#0A0A1F] bg-gray-900 text-[#200000] text-[2.6rem] pb-2 py-1 place-self-center font-digital m-1 col-span-2">
						{Array.from({length: code.length}, v => 8).join("")}
						<div 
							id="guess-screen"
							className="absolute pt-1 inset-0 text-red-500"
						>{guess}</div>
					</div>
					<div className='place-self-center bg-gray-300 px-7 rounded-[100%] border-2 border-gray-900'>
						<div 
							id='handle'
							className='shadow-[inset_5px_-5px_10px_#9090a0] py-10 px-3 rounded-t-2xl rounded-b-2xl'
						/>
					</div>
					<div className='rounded-xl bg-gray-300 m-1 p-1 col-span-2 grid grid-cols-4'>
						{keyboardArr.map(k => (<button 
							className={`shadow-[inset_3px_-3px_3px_#1A1A1A] active:shadow-[inset_-2px_2px_2px_black] bg-gray-800 active:bg-gray-900 text-white py-2 m-2 rounded-xl ${typeof k == "string" ? "text-xs" : ""}`}
							onClick={() => onKeyClick(k)}
							key={k}
						>{k}</button>))}
					</div>
				<p className='text-center shadow-[1px_-1px_1px_1px_#0A0A1F] border border-[#0A0A1F] bg-gray-900 text-xs text-red-500 pb-2 py-1 place-self-center font-digital m-1'>{`Attempts left (${attempts})`}</p>
				</div>
				{safeIsOpen ? (<div 
					id='share-buttons'
					className='mx-10 bg-yellow-50 border border-indigo-200 grid place-content-center'
				><FacebookShareButton 
					url={`https://puzzle-challenge.vercel.app/crack-the-code,${difficulty},${attempts}`}
					hashtag={'#crackthecode'}
				>
					<FacebookIcon size={32} round className='my-1'/>
				</FacebookShareButton></div>) : ""}
			</div>
			<div id="hints"/>
		</div>
	)
}
