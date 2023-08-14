export function getMatrix(diff) {
	let matrix = [];
	let row = [];
	let w = 10;
	let h = 10;
	if (diff == "Easy") {
		while (w > 0) {
			row.push(0)
			w--;
		}
		while (h > 0) {
			matrix.push(row)
			h--;
		}
	} else if (diff == "Medium") {
		w = 17
		while (w > 0) {
			row.push(0)
			w--;
		}
		h = 17
		while (h > 0) {
			matrix.push(row)
			h--;
		}
	} else if (diff == "Hard") {
		w = 24
		while (w > 0) {
			row.push(0)
			w--;
		}
		h = 24
		while (h > 0) {
			matrix.push(row)
			h--;
		}
	} else {
		w = 30
		while (w > 0) {
			row.push(0)
			w--;
		}
		h = 30
		while (h > 0) {
			matrix.push(row)
			h--;
		}
	}
	return matrix
}
