export default function Grid({ puzzleObj, puzzleBorderColor, focusedCellBorderColor, toggledButtonColor, untoggledButtonColor, focusedPencilCellBg }) {
	
	const nums = ['1','2','3','4','5','6','7','8','9'];
	
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
			document.getElementById('focused-cell').className = document.getElementById('focused-cell').className
			.replace(focusedCellBorderColor,puzzleBorderColor)
			.replace(focusedPencilCellBg, "");
			document.getElementById('focused-cell').id = '';
		}
		cell.id = 'focused-cell';
		cell.className = cell.className.replace(puzzleBorderColor,focusedCellBorderColor)
		if (cell.readOnly) cell.className += focusedPencilCellBg;
		if (cell.readOnly && cell.value == 'click') {
			let pencilArr = [" "," "," "," "," ","\n"," "," "," "," "," ","\n"," "," "," "," "," "]
			cell.value = pencilArr.join("");
			cell.className += " leading-none";
			nums.map(n => {
				document.getElementById('btn-' + n).className = document.getElementById('btn-' + n).className.replace(toggledButtonColor,untoggledButtonColor);
			})
		} else if (cell.readOnly) {
			nums.map(n => {
				if (cell.value.indexOf(n) != -1) {
					document.getElementById('btn-' + n).className = document.getElementById('btn-' + n).className.replace(untoggledButtonColor,toggledButtonColor);
				} else {
					document.getElementById('btn-' + n).className = document.getElementById('btn-' + n).className.replace(toggledButtonColor,untoggledButtonColor);
				}
			})
		}
	}
	
	return (
		<form id="sudoku-form" autoComplete="off" onSubmit={onSubmit}>
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
						className={`resize-none aspect-square text-center text-gray-orange bg-yellow-50 border ${puzzleBorderColor} focus:outline-none`}
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
