export function getMatrix(diff) {
	let matrix = [];
	let row = [];
	let w;
	let h;
	if (diff == "Easy") {
		w = 10;
		h = w;
	} else if (diff == "Medium") {
		w = 17;
		h = w;
	} else if (diff == "Hard") {
		w = 24;
		h = w;
	} else if (diff == "Expert") {
		w = 30;
		h = w;
	}
	while (w > 0) {
		row.push(0)
		w--
	}
	while (h > 0) {
		matrix.push(row)
		h--
	}
	return matrix
}
