export default function Grid({ puzzleObj, puzzleBorderColor, focusedCellBorderColor }) {
	
	const onSubmit = (e) => {
		e.preventDefault();
    const sudokuForm = e.target;
    const sudokuData = new FormData(sudokuForm);
    const guesses = sudokuData.getAll('guess');
    if (guesses.toString() == puzzleObj.removed.toString()) {
    	document.getElementById("instruction").innerHTML = "Well done!";
    } else if (guesses.toString().match(",,") || guesses.toString().match(/^,/) || guesses.toString().match(/,$/)) {
    	document.getElementById("instruction").innerHTML = "Missing numbers.";
    } else {
    	document.getElementById("instruction").innerHTML = "Oopsie! Something is wrong here, try again.";
    }
	}
	
	const onCellFocus = (cell) => {
		if (document.getElementById('focused-cell')) {
			document.getElementById('focused-cell').className = document.getElementById('focused-cell').className.replace(focusedCellBorderColor,puzzleBorderColor)
			document.getElementById('focused-cell').id = '';
		}
		cell.id = 'focused-cell';
		cell.className = cell.className.replace(puzzleBorderColor,focusedCellBorderColor);
	}
	
	return (
		<form id="sudoku-form" autoComplete="off" onSubmit={onSubmit}>
			<div className={`aspect-square sm:h-80 bg-yellow-50 grid grid-cols-3 border-2 ${puzzleBorderColor}`}>{puzzleObj.puzzle.map((region,iReg) => (
				<div 
					key={"region" + iReg}
					className={`aspect-square text-2xl grid grid-cols-3 border ${puzzleBorderColor}`}
				>{region.map((cell,iCell) => (
					cell == "" ? <input
						onFocus={(e) => onCellFocus(e.target)}
						name='guess'
					 	key={"cell-" + iCell + "-region" + iReg + "-removed"}
						inputMode='none' 
						className={`aspect-square text-center text-gray-orange bg-yellow-50 border ${puzzleBorderColor} focus:outline-none`}
					/> : <div
					 	key={"cell-" + iCell + "-region-" + iReg + "-clue"}
						className={`aspect-square flex items-center justify-center border ${puzzleBorderColor}`}
					>{cell}</div>
				))}</div>
			))}</div>
			<div className="flex justify-center">
				<input 
					type="submit" 
					value="Submit"
					className="mt-2 p-2 pl-10 pr-10 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-700 rounded"
				/>
			</div>
		</form>
	)
}
