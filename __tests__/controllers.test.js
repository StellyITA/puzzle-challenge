import '@testing-library/jest-dom'
import { getMatrix, addMines, getAdjacent, getClues } from '../src/controllers/mineSweeper.js'

const row = Array.from({ length: 10 },v => 0);

const easyMines = addMines("Easy","0,0").reduce((acc,val) => acc.concat(val)).filter(e => e == "M");
const medMines = addMines("Medium","0,0").reduce((acc,val) => acc.concat(val)).filter(e => e == "M");
const hardMines = addMines("Hard","0,0").reduce((acc,val) => acc.concat(val)).filter(e => e == "M");
const expMines = addMines("Expert","0,0").reduce((acc,val) => acc.concat(val)).filter(e => e == "M");
const cluesMatrix = getClues("Easy","0,0");

describe('Minesweeper controller', () => {
 	it('Returns an empty matrix', () => {
    	expect(getMatrix("Easy")).toHaveLength(10);
    	expect(getMatrix("Easy")[0]).toHaveLength(10);
    	expect(getMatrix("Easy")[1]).toHaveLength(10);
    	expect(getMatrix("Easy")[2]).toHaveLength(10);
    	expect(getMatrix("Easy")[3]).toHaveLength(10);
    	expect(getMatrix("Easy")[4]).toHaveLength(10);
    	expect(getMatrix("Easy")[5]).toHaveLength(10);
    	expect(getMatrix("Easy")[6]).toHaveLength(10);
    	expect(getMatrix("Easy")[7]).toHaveLength(10);
    	expect(getMatrix("Easy")[8]).toHaveLength(10);
    	expect(getMatrix("Easy")[9]).toHaveLength(10);
    	expect(getMatrix("Medium")).toHaveLength(11);
    	expect(getMatrix("Medium")[0]).toHaveLength(10);
    	expect(getMatrix("Medium")[1]).toHaveLength(10);
    	expect(getMatrix("Medium")[2]).toHaveLength(10);
    	expect(getMatrix("Medium")[3]).toHaveLength(10);
    	expect(getMatrix("Medium")[4]).toHaveLength(10);
    	expect(getMatrix("Medium")[5]).toHaveLength(10);
    	expect(getMatrix("Medium")[6]).toHaveLength(10);
    	expect(getMatrix("Medium")[7]).toHaveLength(10);
    	expect(getMatrix("Medium")[8]).toHaveLength(10);
    	expect(getMatrix("Medium")[9]).toHaveLength(10);
    	expect(getMatrix("Hard")).toHaveLength(12);
    	expect(getMatrix("Hard")[0]).toHaveLength(10);
    	expect(getMatrix("Hard")[1]).toHaveLength(10);
    	expect(getMatrix("Hard")[2]).toHaveLength(10);
    	expect(getMatrix("Hard")[3]).toHaveLength(10);
    	expect(getMatrix("Hard")[4]).toHaveLength(10);
    	expect(getMatrix("Hard")[5]).toHaveLength(10);
    	expect(getMatrix("Hard")[6]).toHaveLength(10);
    	expect(getMatrix("Hard")[7]).toHaveLength(10);
    	expect(getMatrix("Hard")[8]).toHaveLength(10);
    	expect(getMatrix("Hard")[9]).toHaveLength(10);
    	expect(getMatrix("Expert")).toHaveLength(13);
    	expect(getMatrix("Expert")[0]).toHaveLength(10);
    	expect(getMatrix("Expert")[1]).toHaveLength(10);
    	expect(getMatrix("Expert")[2]).toHaveLength(10);
    	expect(getMatrix("Expert")[3]).toHaveLength(10);
    	expect(getMatrix("Expert")[4]).toHaveLength(10);
    	expect(getMatrix("Expert")[5]).toHaveLength(10);
    	expect(getMatrix("Expert")[6]).toHaveLength(10);
    	expect(getMatrix("Expert")[7]).toHaveLength(10);
    	expect(getMatrix("Expert")[8]).toHaveLength(10);
    	expect(getMatrix("Expert")[9]).toHaveLength(10);
    })
	it("Returns a matrix with \"M\"'s", () => {
		expect(easyMines).toHaveLength(10);
		expect(medMines).toHaveLength(13);
		expect(hardMines).toHaveLength(16);
		expect(expMines).toHaveLength(20);
	})
	it("Returns an array with the adjacent cells coordinates", () => {
		expect(getAdjacent(0,0,"Easy")).toStrictEqual([{y: 1, x: 0},{y: 0, x: 1},{y: 1, x: 1}]);
		expect(getAdjacent(10,9,"Medium")).toStrictEqual([{y: 9, x: 9},{y: 10, x: 8},{y: 9, x: 8}]);
		expect(getAdjacent(0,9,"Expert")).toStrictEqual([{y: 0, x: 8},{y: 1, x: 9},{y: 1, x: 8}]);
		expect(getAdjacent(11,0,"Hard")).toStrictEqual([{y: 10, x: 0},{y: 11, x: 1},{y: 10, x: 1}]);
		expect(getAdjacent(1,0,"Medium")).toStrictEqual([{y: 0, x: 0},{y: 2, x: 0},{y: 1, x: 1},{y: 2, x: 1},{y: 0, x: 1}]);
		expect(getAdjacent(0,2,"Hard")).toStrictEqual([{y: 0, x: 1},{y: 1, x: 2},{y: 0, x: 3},{y: 1, x: 3},{y: 1, x: 1}]);
		expect(getAdjacent(12,3,"Expert")).toStrictEqual([{y: 11, x: 3},{y: 12, x: 2},{y: 11, x: 2},{y: 12, x: 4},{y: 11, x: 4}]);
		expect(getAdjacent(4,9,"Easy")).toStrictEqual([{y: 3, x: 9},{y: 4, x: 8},{y: 3, x: 8},{y: 5, x: 9},{y: 5, x: 8}]);
		expect(getAdjacent(5,6,"Medium")).toStrictEqual([{y: 4, x: 6},{y: 5, x: 5},{y: 4, x: 5},{y: 6, x: 6},{y: 5, x: 7},{y: 6, x: 7},{y: 6, x: 5},{y: 4, x: 7}]);
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
