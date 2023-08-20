export function getMatrix(diff) {
	const row = Array.from({ length: 10 },v => 0);
	const matrix = [];
	for (let i in row) {
		matrix.push([...row]);
	}
	
	if (diff != "Easy") {
		matrix.push([...row]);
		if (diff != "Medium") {
			matrix.push([...row]);
			if (diff != "Hard") {
				matrix.push([...row]);
			}
		}
	}
	return matrix
}

export function addMines(diff,click) {
	const matrix = getMatrix(diff);
	let mines = diff == "Easy" ? 10 : diff == "Medium" ? 13 : diff == "Hard" ? 16 : 20;
	const placed = [click];
	const clickCoord = click.split(",");
	const adj = getAdjacent(clickCoord[1],clickCoord[0]);
	adj.map(c => placed.push(c.x + "," + c.y));
	while (mines > 0) {
		const x = Math.floor(Math.random() * 10);
		const y = Math.floor(Math.random() * matrix.length);
		if (placed.indexOf(x + "," + y) == -1) {
			matrix[y][x] = "M";
			placed.push(x + "," + y);
			mines--;
		}
	}
	return matrix
}

export function getAdjacent(y,x,diff) {
	y = Number(y);
	x = Number(x);
	const h = diff == "Easy" ? 9 : diff == "Medium" ? 10 : diff == "Hard" ? 11 : 12;
	const adjacent = [];
	if (y > 0) {
		adjacent.push({ y: y - 1, x: x });
	}
	if (x > 0) {
		adjacent.push({ y: y, x: x - 1 });
	}
	if (y > 0 && x > 0) {
		adjacent.push({ y: y - 1, x: x - 1 });
	}
	if (y < h) {
		adjacent.push({ y: y + 1, x: x });
	}
	if (x < 9) {
		adjacent.push({ y: y, x: x + 1 });
	}
	if (y < h && x < 9) {
		adjacent.push({ y: y + 1, x: x + 1 });
	}
	if (y < h && x > 0) {
		adjacent.push({ y: y + 1, x: x - 1 });
	}
	if (y > 0 && x < 9) {
		adjacent.push({ y: y - 1, x: x + 1 });
	}
	return adjacent;
}

export function getClues(diff,click) {
	const minedMatrix = addMines(diff,click); 
	minedMatrix.map((row,y) => row.map((cell,x) => {
		if (cell == "M") {
			const adjacent = getAdjacent(y,x,diff);
			adjacent.map(adj => {
				const x = adj.x
				const y = adj.y
				if (minedMatrix[y][x] != "M") minedMatrix[y][x]++;
			})
		}
	}))
	return minedMatrix;
}
