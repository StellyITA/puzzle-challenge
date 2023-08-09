import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share'

export default function Grid({ puzzleObj, puzzleBorderColor, focusedCellBorderColor, toggledButtonColor, untoggledButtonColor, focusedPencilCellBg, puzzleBgColor, activePencilButton, timerRef, difficulty, minutes, seconds, completed, setCompleted }) {
	
	
	function onSubmit(e) {
		e.preventDefault();
    const sudokuForm = e.target;
    const sudokuData = new FormData(sudokuForm);
    const guesses = sudokuData.getAll('guess');
    if (guesses.toString() == puzzleObj.removed.toString()) {
    	document.getElementById("instruction").innerHTML = "Well done!";
    	clearInterval(timerRef.current);
    	setCompleted(true);
    } else if (guesses.toString().match(",,") || guesses.toString().match(/^,/) || guesses.toString().match(/,$/)) {
    	document.getElementById("instruction").innerHTML = "Missing numbers.";
    } else {
    	document.getElementById("instruction").innerHTML = "Oopsie! Something is wrong here, try again.";
    }
	}
	
	function onCellFocus(cell) {
		if (document.getElementById('focused-cell')) {
			document.getElementById('focused-cell').className = document.getElementById('focused-cell').className
			.replace(focusedCellBorderColor,puzzleBorderColor)
			.replace(focusedPencilCellBg,puzzleBgColor);
			document.getElementById('focused-cell').id = '';
		}
		cell.id = 'focused-cell';
		cell.className = cell.className.replace(puzzleBorderColor,focusedCellBorderColor);
		const numbers = Array.from({ length: 9 }, (v,i) => i + 1);
		if (cell.readOnly) {
			if (!document.getElementById('pencil-button').className.match(activePencilButton)) document.getElementById('pencil-button').className += activePencilButton;
			cell.className = cell.className.replace(puzzleBgColor,focusedPencilCellBg);
			numbers.map(n => {
				if (cell.value.match(n)) {
					document.getElementById('btn-' + n).className = document.getElementById('btn-' + n).className.replace(untoggledButtonColor,toggledButtonColor);
				} else {
					document.getElementById('btn-' + n).className = document.getElementById('btn-' + n).className.replace(toggledButtonColor,untoggledButtonColor);
				}
			})
		} else {
			numbers.map(n => {
			 document.getElementById('btn-' + n).className = document.getElementById('btn-' + n).className.replace(toggledButtonColor,untoggledButtonColor);
			})
			document.getElementById('pencil-button').className = document.getElementById('pencil-button').className.replace(activePencilButton,"");
		}
	}
	
	return (
		<>
			<form 
				id="sudoku-form" 
				autoComplete="off" 
				onSubmit={onSubmit}
				>
				<div className={`aspect-square sm:h-80 bg-yellow-50 grid grid-cols-3 border-2 ${puzzleBorderColor}`}>{puzzleObj.puzzle.map((region,iReg) => (
					<div 
						key={"region" + iReg}
						className={`aspect-square text-2xl grid grid-cols-3 border ${puzzleBorderColor}`}
					>{region.map((cell,iCell) => (
						cell == "" ? <textarea
							onFocus={(e) => onCellFocus(e.target)}
							name='guess'
						 	key={"cell-" + iCell + "-region" + iReg + "-removed"}
							inputMode='none' 
							className={`select-none resize-none aspect-square pt-1 sm:pt-0 text-center text-gray-orange bg-yellow-50 border ${puzzleBorderColor} focus:outline-none`}
						/> : <div
						 	key={"cell-" + iCell + "-region-" + iReg + "-clue"}
							className={`aspect-square flex items-center justify-center border ${puzzleBorderColor}`}
						>{cell}</div>
					))}</div>
				))}</div>
				<div 
					id='share-buttons'
					className='bg-yellow-50 border border-indigo-200 grid place-content-center'
				>{completed ? (<FacebookShareButton 
					url={`https://puzzle-challenge.vercel.app/sudoku,${difficuly},${minutes},${seconds}`}
					hashtag={'#sudoku'}
				>
					<FacebookIcon size={32} round className='my-1'/>
				</FacebookShareButton>) : ""}</div>
				<div className="flex justify-center">
					<input 
						type="submit" 
						value="Submit"
						className="mt-2 p-2 pl-10 pr-10 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-700 rounded"
					/>
				</div>
			</form>
		</>
	)
}
