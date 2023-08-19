import '@testing-library/jest-dom'
import { getMatrix, addMines, getAdjacent, getClues } from '../src/controllers/mineSweeper.js'

const easyRow = Array.from({ length: 10 },v => 0);
const medRow = Array.from({ length: 17 },v => 0);
const hardRow = Array.from({ length: 24 },v => 0);
const expRow = Array.from({ length: 30 },v => 0);

const matrix = easyRow.map(e => easyRow);
const easyMines = addMines("Easy","0,0").reduce((acc,val) => acc.concat(val)).filter(e => e == "M");
const medMines = addMines("Medium","0,0").reduce((acc,val) => acc.concat(val)).filter(e => e == "M");
const hardMines = addMines("Hard","0,0").reduce((acc,val) => acc.concat(val)).filter(e => e == "M");
const expMines = addMines("Expert","0,0").reduce((acc,val) => acc.concat(val)).filter(e => e == "M");
const cluesMatrix = getClues("Easy","0,0");

describe('Minesweeper controller', () => {
 	it('Returns an empty matrix', () => {
    	expect(getMatrix()).toStrictEqual(matrix);
    })
	it("Returns a matrix with \"M\"'s", () => {
		expect(easyMines).toHaveLength(10);
		expect(medMines).toHaveLength(13);
		expect(hardMines).toHaveLength(16);
		expect(expMines).toHaveLength(20);
	})
	it("Returns an array with the adjacent cells coordinates", () => {
		expect(getAdjacent(0,0)).toStrictEqual([{y: 1, x: 0},{y: 0, x: 1},{y: 1, x: 1}]);
		expect(getAdjacent(9,9)).toStrictEqual([{y: 8, x: 9},{y: 9, x: 8},{y: 8, x: 8}]);
		expect(getAdjacent(0,9)).toStrictEqual([{y: 0, x: 8},{y: 1, x: 9},{y: 1, x: 8}]);
		expect(getAdjacent(9,0)).toStrictEqual([{y: 8, x: 0},{y: 9, x: 1},{y: 8, x: 1}]);
		expect(getAdjacent(1,0)).toStrictEqual([{y: 0, x: 0},{y: 2, x: 0},{y: 1, x: 1},{y: 2, x: 1},{y: 0, x: 1}]);
		expect(getAdjacent(0,2)).toStrictEqual([{y: 0, x: 1},{y: 1, x: 2},{y: 0, x: 3},{y: 1, x: 3},{y: 1, x: 1}]);
		expect(getAdjacent(9,3)).toStrictEqual([{y: 8, x: 3},{y: 9, x: 2},{y: 8, x: 2},{y: 9, x: 4},{y: 8, x: 4}]);
		expect(getAdjacent(4,9)).toStrictEqual([{y: 3, x: 9},{y: 4, x: 8},{y: 3, x: 8},{y: 5, x: 9},{y: 5, x: 8}]);
		expect(getAdjacent(5,6)).toStrictEqual([{y: 4, x: 6},{y: 5, x: 5},{y: 4, x: 5},{y: 6, x: 6},{y: 5, x: 7},{y: 6, x: 7},{y: 6, x: 5},{y: 4, x: 7}]);
    })
	it("Returns the complete board with clues", () => {
		expect(cluesMatrix).toHaveLength(10);
		expect(cluesMatrix[0]).toHaveLength(10);
		cluesMatrix.map((row,y) => row.map((cell,x) => {
			if (typeof cell == "number" && cell > 0) {
				let minesCount = 0;
				const adjacent = getAdjacent(y,x,"Easy");
				adjacent.map(adj => {
					const yAdj = adj.y
					const xAdj = adj.x
					if (cluesMatrix[yAdj][xAdj] == "M") {
						minesCount++;
					}
				})
				expect(minesCount).toBe(cell);
			}
		}));
	})
})
