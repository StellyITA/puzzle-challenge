import { puzzles } from '../collections/sudoku-collection.js';

module.exports = class SudokuMaker {

	getPuzzle(dif) {
		let solution;
		let puzzle;
		let i = Math.floor(Math.random() * puzzles[dif].length); 
		if (dif == "easy") {
			let obj = puzzles.easy[i];
			puzzle = obj.puzzle;
			solution = obj.solution;
		} else if (dif == "medium") {
			let obj = puzzles.medium[i];
			puzzle = obj.puzzle;
			solution = obj.solution;
		} else if (dif == "hard") {
			let obj = puzzles.hard[i];
			puzzle = obj.puzzle;
			solution = obj.solution;
		} else if (dif == "expert") {
			let obj = puzzles.expert[i];
			puzzle = obj.puzzle;
			solution = obj.solution;
		}
		let rng = Math.floor(Math.random() * 2343751);
		let obj;
		//if (dif != "expert") {
			if ((i == 1 || i == 3) && dif == "expert" && rng > 0 && rng % 2 == 0) {
				obj = this.mirror(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
				obj = this.invert(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
				obj = this.mixRegCol(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
			} else if ((i == 1 || i == 3) && dif == "expert" && rng > 0) {
				obj = this.mirror(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
				obj = this.invert(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
				obj = this.mixRegRow(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
			} else if (rng > 0 && rng % 2 == 0) {
				obj = this.mirror(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
				obj = this.invert(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
				obj = this.mixRegCol(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
				obj = this.mixRegRow(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
				obj = this.mixMix(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
			} else if (rng > 0) {
				obj = this.mirror(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
				obj = this.mixRegCol(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
				obj = this.mixRegRow(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
				obj = this.mixMix(puzzle,solution);
				puzzle = obj.puzzle;
				solution = obj.solution;
			}
		//}
		let removed = [];
		solution.map((reg,k) => {
			reg.map((v,j) => {
				if (puzzle[k][j] == "") {
					removed.push(v);
				}
			})
		});
		//console.log(removed)
		return {
			puzzle: puzzle,
			removed: removed
		}
		
	}
	
	mixRegCol(puzzle,solution) {
		let rng = Math.floor(Math.random() * 5);
		let sortedP = [];
		let sortedS = [];
		switch (rng) {
			case 0:
				sortedP.push(puzzle[0]);
				sortedP.push(puzzle[2]);
				sortedP.push(puzzle[1]);
				sortedP.push(puzzle[3]);
				sortedP.push(puzzle[5]);
				sortedP.push(puzzle[4]);
				sortedP.push(puzzle[6]);
				sortedP.push(puzzle[8]);
				sortedP.push(puzzle[7]);
				sortedS.push(solution[0]);
				sortedS.push(solution[2]);
				sortedS.push(solution[1]);
				sortedS.push(solution[3]);
				sortedS.push(solution[5]);
				sortedS.push(solution[4]);
				sortedS.push(solution[6]);
				sortedS.push(solution[8]);
				sortedS.push(solution[7]);
				break;
			case 1:
				sortedP.push(puzzle[1]);
				sortedP.push(puzzle[0]);
				sortedP.push(puzzle[2]);
				sortedP.push(puzzle[4]);
				sortedP.push(puzzle[3]);
				sortedP.push(puzzle[5]);
				sortedP.push(puzzle[7]);
				sortedP.push(puzzle[6]);
				sortedP.push(puzzle[8]);
				sortedS.push(solution[1]);
				sortedS.push(solution[0]);
				sortedS.push(solution[2]);
				sortedS.push(solution[4]);
				sortedS.push(solution[3]);
				sortedS.push(solution[5]);
				sortedS.push(solution[7]);
				sortedS.push(solution[6]);
				sortedS.push(solution[8]);
				break;
			case 2:
				sortedP.push(puzzle[1]);
				sortedP.push(puzzle[2]);
				sortedP.push(puzzle[0]);
				sortedP.push(puzzle[4]);
				sortedP.push(puzzle[5]);
				sortedP.push(puzzle[3]);
				sortedP.push(puzzle[7]);
				sortedP.push(puzzle[8]);
				sortedP.push(puzzle[6]);
				sortedS.push(solution[1]);
				sortedS.push(solution[2]);
				sortedS.push(solution[0]);
				sortedS.push(solution[4]);
				sortedS.push(solution[5]);
				sortedS.push(solution[3]);
				sortedS.push(solution[7]);
				sortedS.push(solution[8]);
				sortedS.push(solution[6]);
				break;
			case 3:
				sortedP.push(puzzle[2]);
				sortedP.push(puzzle[1]);
				sortedP.push(puzzle[0]);
				sortedP.push(puzzle[5]);
				sortedP.push(puzzle[4]);
				sortedP.push(puzzle[3]);
				sortedP.push(puzzle[8]);
				sortedP.push(puzzle[7]);
				sortedP.push(puzzle[6]);
				sortedS.push(solution[2]);
				sortedS.push(solution[1]);
				sortedS.push(solution[0]);
				sortedS.push(solution[5]);
				sortedS.push(solution[4]);
				sortedS.push(solution[3]);
				sortedS.push(solution[8]);
				sortedS.push(solution[7]);
				sortedS.push(solution[6]);
				break;
			case 4:
				sortedP.push(puzzle[2]);
				sortedP.push(puzzle[0]);
				sortedP.push(puzzle[1]);
				sortedP.push(puzzle[5]);
				sortedP.push(puzzle[3]);
				sortedP.push(puzzle[4]);
				sortedP.push(puzzle[8]);
				sortedP.push(puzzle[6]);
				sortedP.push(puzzle[7]);
				sortedS.push(solution[2]);
				sortedS.push(solution[0]);
				sortedS.push(solution[1]);
				sortedS.push(solution[5]);
				sortedS.push(solution[3]);
				sortedS.push(solution[4]);
				sortedS.push(solution[8]);
				sortedS.push(solution[6]);
				sortedS.push(solution[7]);
				break;
		}
		return {
			puzzle: sortedP,
			solution: sortedS
		}
	}
	
	mixRegRow(puzzle,solution) {
		let rng = Math.floor(Math.random() * 5);
		let sortedP = [];
		let sortedS = [];
		switch (rng) {
			case 0:
				sortedP.push(puzzle[0]);
				sortedP.push(puzzle[1]);
				sortedP.push(puzzle[2]);
				sortedP.push(puzzle[6]);
				sortedP.push(puzzle[7]);
				sortedP.push(puzzle[8]);
				sortedP.push(puzzle[3]);
				sortedP.push(puzzle[4]);
				sortedP.push(puzzle[5]);
				sortedS.push(solution[0]);
				sortedS.push(solution[1]);
				sortedS.push(solution[2]);
				sortedS.push(solution[6]);
				sortedS.push(solution[7]);
				sortedS.push(solution[8]);
				sortedS.push(solution[3]);
				sortedS.push(solution[4]);
				sortedS.push(solution[5]);
				break;
			case 1:
				sortedP.push(puzzle[3]);
				sortedP.push(puzzle[4]);
				sortedP.push(puzzle[5]);
				sortedP.push(puzzle[0]);
				sortedP.push(puzzle[1]);
				sortedP.push(puzzle[2]);
				sortedP.push(puzzle[6]);
				sortedP.push(puzzle[7]);
				sortedP.push(puzzle[8]);
				sortedS.push(solution[3]);
				sortedS.push(solution[4]);
				sortedS.push(solution[5]);
				sortedS.push(solution[0]);
				sortedS.push(solution[1]);
				sortedS.push(solution[2]);
				sortedS.push(solution[6]);
				sortedS.push(solution[7]);
				sortedS.push(solution[8]);
				break;
			case 2:
				sortedP.push(puzzle[3]);
				sortedP.push(puzzle[4]);
				sortedP.push(puzzle[5]);
				sortedP.push(puzzle[6]);
				sortedP.push(puzzle[7]);
				sortedP.push(puzzle[8]);
				sortedP.push(puzzle[0]);
				sortedP.push(puzzle[1]);
				sortedP.push(puzzle[2]);
				sortedS.push(solution[3]);
				sortedS.push(solution[4]);
				sortedS.push(solution[5]);
				sortedS.push(solution[6]);
				sortedS.push(solution[7]);
				sortedS.push(solution[8]);
				sortedS.push(solution[0]);
				sortedS.push(solution[1]);
				sortedS.push(solution[2]);
				break;
			case 3:
				sortedP.push(puzzle[6]);
				sortedP.push(puzzle[7]);
				sortedP.push(puzzle[8]);
				sortedP.push(puzzle[3]);
				sortedP.push(puzzle[4]);
				sortedP.push(puzzle[5]);
				sortedP.push(puzzle[0]);
				sortedP.push(puzzle[1]);
				sortedP.push(puzzle[2]);
				sortedS.push(solution[6]);
				sortedS.push(solution[7]);
				sortedS.push(solution[8]);
				sortedS.push(solution[3]);
				sortedS.push(solution[4]);
				sortedS.push(solution[5]);
				sortedS.push(solution[0]);
				sortedS.push(solution[1]);
				sortedS.push(solution[2]);
				break;
			case 4:
				sortedP.push(puzzle[6]);
				sortedP.push(puzzle[7]);
				sortedP.push(puzzle[8]);
				sortedP.push(puzzle[0]);
				sortedP.push(puzzle[1]);
				sortedP.push(puzzle[2]);
				sortedP.push(puzzle[3]);
				sortedP.push(puzzle[4]);
				sortedP.push(puzzle[5]);
				sortedS.push(solution[6]);
				sortedS.push(solution[7]);
				sortedS.push(solution[8]);
				sortedS.push(solution[0]);
				sortedS.push(solution[1]);
				sortedS.push(solution[2]);
				sortedS.push(solution[3]);
				sortedS.push(solution[4]);
				sortedS.push(solution[5]);
				break;
		}
		return {
			puzzle: sortedP,
			solution: sortedS
		}
	}
	
	invert(puzzle,solution) {
		let sortP = [];
		let sortS = [];
		for (let i = 8; i >= 0; i--) {
			let sortRegP = [];
			let sortRegS = [];
			for (let j = 8; j >= 0; j--) {
				sortRegP.push(puzzle[i][j]);
				sortRegS.push(solution[i][j]);
			}
			sortP.push(sortRegP);
			sortS.push(sortRegS);
		}
		return {
			puzzle: sortP,
			solution: sortS
		}
	}
	
	getCoord(puzzle) {
		let regPuzzle = JSON.parse(JSON.stringify(puzzle));
		let sep = []
		regPuzzle.map((reg,i) => {
			reg.map(v => {
				let el = { value: v, region: i + 1 };
				v = el;
				sep.push(v);
			})
		});
		let row = 1;
		let col = 1;
		let i = 0;
		while (i < 81) {
			if (i == 3 || i == 6 
			|| i == 12 || i == 15 
			|| i == 21 || i == 24 || i == 27 || i == 30 || i == 33 
			|| i == 39 || i == 42
			|| i == 48 || i == 51 || i == 54 || i == 57 || i == 60
			|| i == 66 || i == 69
			|| i == 75 || i == 78) {
				row++;
			} else if (i == 9 || i == 18 || i == 36 || i == 45 || i == 63 || i == 72) {
				row -= 2;
			}
			sep[i].row = row;
			if (i == 3 || i == 6 
			|| i == 12 || i == 15 
			|| i == 21 || i == 24 
			|| i == 30 || i == 33 
			|| i == 39 || i == 42 
			|| i == 48 || i == 51 
			|| i == 57 || i == 60 
			|| i == 66 || i == 69 
			|| i == 75 || i == 78) {
				col -= 3;
			} else if (i == 27 || i == 54) {
				col = 1;
			}
			sep[i].column = col;
			col++;
			i++;
		}
		return sep;
	}
	
	reJoin(sep) {
		let sortCol = [];
		let col = 1;
		while (col <= 9) {
			sep.map(e => {
				if (e.column == col) {
					sortCol.push(e);
				}
			})
			col++;
		}
		let sortRow = [];
		let row = 1;
		while (row <= 9) {
			sortCol.map(e => {
				if (e.row == row) {
					sortRow.push(e);
				}
			})
			row++;
		}
		let reg = 1;
		let puzzle = [];
		while (reg <= 9) {
			let regArr = [];
			sortRow.map(e => {
				if (e.region == reg) {
					regArr.push(e.value);
				}
			})
			puzzle.push(regArr);
			reg++;
		}
		return puzzle;
	}
	
	mirror(puzzle,solution) {
		puzzle = this.getCoord(puzzle);
		solution = this.getCoord(solution);
		let rng = Math.floor(Math.random() * 3);
		if (rng == 0) {
			puzzle = puzzle.map(e => {
				switch (e.column) {
					case 1:
						e.column = 9;
						break;
					case 2:
						e.column = 8;
						break;
					case 3:
						e.column = 7;
						break;
					case 4:
						e.column = 6;
						break;
					case 6:
						e.column = 4;
						break;
					case 7:
						e.column = 3;
						break;
					case 8:
						e.column = 2;
						break;
					case 9:
						e.column = 1;
						break;
				}
				return e;
			})
			solution = solution.map(e => {
				switch (e.column) {
					case 1:
						e.column = 9;
						break;
					case 2:
						e.column = 8;
						break;
					case 3:
						e.column = 7;
						break;
					case 4:
						e.column = 6;
						break;
					case 6:
						e.column = 4;
						break;
					case 7:
						e.column = 3;
						break;
					case 8:
						e.column = 2;
						break;
					case 9:
						e.column = 1;
						break;
				}
				return e;
			})
		} else if (rng == 1) {
			puzzle = puzzle.map(e => {
				switch (e.row) {
					case 1:
						e.row = 9;
						break;
					case 2:
						e.row = 8;
						break;
					case 3:
						e.row = 7;
						break;
					case 4:
						e.row = 6;
						break;
					case 6:
						e.row = 4;
						break;
					case 7:
						e.row = 3;
						break;
					case 8:
						e.row = 2;
						break;
					case 9:
						e.row = 1;
						break;
				}
				return e;
			})
			solution = solution.map(e => {
				switch (e.row) {
					case 1:
						e.row = 9;
						break;
					case 2:
						e.row = 8;
						break;
					case 3:
						e.row = 7;
						break;
					case 4:
						e.row = 6;
						break;
					case 6:
						e.row = 4;
						break;
					case 7:
						e.row = 3;
						break;
					case 8:
						e.row = 2;
						break;
					case 9:
						e.row = 1;
						break;
				}
				return e;
			})
		} else {
			puzzle = puzzle.map(e => {
				switch (e.column) {
					case 1:
						e.column = 9;
						break;
					case 2:
						e.column = 8;
						break;
					case 3:
						e.column = 7;
						break;
					case 4:
						e.column = 6;
						break;
					case 6:
						e.column = 4;
						break;
					case 7:
						e.column = 3;
						break;
					case 8:
						e.column = 2;
						break;
					case 9:
						e.column = 1;
						break;
				}
				return e;
			})
			solution = solution.map(e => {
				switch (e.column) {
					case 1:
						e.column = 9;
						break;
					case 2:
						e.column = 8;
						break;
					case 3:
						e.column = 7;
						break;
					case 4:
						e.column = 6;
						break;
					case 6:
						e.column = 4;
						break;
					case 7:
						e.column = 3;
						break;
					case 8:
						e.column = 2;
						break;
					case 9:
						e.column = 1;
						break;
				}
				return e;
			})
			puzzle = puzzle.map(e => {
				switch (e.row) {
					case 1:
						e.row = 9;
						break;
					case 2:
						e.row = 8;
						break;
					case 3:
						e.row = 7;
						break;
					case 4:
						e.row = 6;
						break;
					case 6:
						e.row = 4;
						break;
					case 7:
						e.row = 3;
						break;
					case 8:
						e.row = 2;
						break;
					case 9:
						e.row = 1;
						break;
				}
				return e;
			})
			solution = solution.map(e => {
				switch (e.row) {
					case 1:
						e.row = 9;
						break;
					case 2:
						e.row = 8;
						break;
					case 3:
						e.row = 7;
						break;
					case 4:
						e.row = 6;
						break;
					case 6:
						e.row = 4;
						break;
					case 7:
						e.row = 3;
						break;
					case 8:
						e.row = 2;
						break;
					case 9:
						e.row = 1;
						break;
				}
				return e;
			})
		}
		return {
			puzzle: this.reJoin(puzzle),
			solution: this.reJoin(solution)
		}
	}
	
	mixLines(puzzle,solution,line,regLine,rng) {
		if (regLine == 1) {
			switch (rng) {
				case 1:
					puzzle = puzzle.map(e => {
						if (e[line] == 2) {
							e[line] = 3;
						} else if (e[line] == 3) {
							e[line] = 2;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 2) {
							e[line] = 3;
						} else if (e[line] == 3) {
							e[line] = 2;
						}
						return e;
					});
					break;
				case 2:
					puzzle = puzzle.map(e => {
						if (e[line] == 2) {
							e[line] = 1;
						} else if (e[line] == 1) {
							e[line] = 2;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 2) {
							e[line] = 1;
						} else if (e[line] == 1) {
							e[line] = 2;
						}
						return e;
					});
					break;
				case 3:
					puzzle = puzzle.map(e => {
						if (e[line] == 2) {
							e[line] = 1;
						} else if (e[line] == 1) {
							e[line] = 3;
						} else if (e[line] == 3) {
							e[line] = 2;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 2) {
							e[line] = 1;
						} else if (e[line] == 1) {
							e[line] = 3;
						} else if (e[line] == 3) {
							e[line] = 2;
						}
						return e;
					});
					break;
				case 4:
					puzzle = puzzle.map(e => {
						if (e[line] == 1) {
							e[line] = 3;
						} else if (e[line] == 3) {
							e[line] = 1;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 1) {
							e[line] = 3;
						} else if (e[line] == 3) {
							e[line] = 1;
						}
						return e;
					});
					break;
				case 5:
					puzzle = puzzle.map(e => {
						if (e[line] == 1) {
							e[line] = 2;
						} else if (e[line] == 3) {
							e[line] = 1;
						} else if (e[line] == 2) {
							e[line] = 3;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 1) {
							e[line] = 2;
						} else if (e[line] == 3) {
							e[line] = 1;
						} else if (e[line] == 2) {
							e[line] = 3;
						}
						return e;
					});
					break;
			}
		} else if (regLine == 2) {
			switch (rng) {
				case 1:
					puzzle = puzzle.map(e => {
						if (e[line] == 5) {
							e[line] = 6;
						} else if (e[line] == 6) {
							e[line] = 5;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 5) {
							e[line] = 6;
						} else if (e[line] == 6) {
							e[line] = 5;
						}
						return e;
					});
					break;
				case 2:
					puzzle = puzzle.map(e => {
						if (e[line] == 5) {
							e[line] = 4;
						} else if (e[line] == 4) {
							e[line] = 5;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 5) {
							e[line] = 4;
						} else if (e[line] == 4) {
							e[line] = 5;
						}
						return e;
					});
					break;
				case 3:
					puzzle = puzzle.map(e => {
						if (e[line] == 5) {
							e[line] = 4;
						} else if (e[line] == 4) {
							e[line] = 6;
						} else if (e[line] == 6) {
							e[line] = 5;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 5) {
							e[line] = 4;
						} else if (e[line] == 4) {
							e[line] = 6;
						} else if (e[line] == 6) {
							e[line] = 5;
						}
						return e;
					});
					break;
				case 4:
					puzzle = puzzle.map(e => {
						if (e[line] == 4) {
							e[line] = 6;
						} else if (e[line] == 6) {
							e[line] = 4;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 4) {
							e[line] = 6;
						} else if (e[line] == 6) {
							e[line] = 4;
						}
						return e;
					});
					break;
				case 5:
					puzzle = puzzle.map(e => {
						if (e[line] == 4) {
							e[line] = 5;
						} else if (e[line] == 6) {
							e[line] = 4;
						} else if (e[line] == 5) {
							e[line] = 6;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 4) {
							e[line] = 5;
						} else if (e[line] == 6) {
							e[line] = 4;
						} else if (e[line] == 5) {
							e[line] = 6;
						}
						return e;
					});
					break;
			}
		} else {
			switch (rng) {
				case 1:
					puzzle = puzzle.map(e => {
						if (e[line] == 8) {
							e[line] = 9;
						} else if (e[line] == 9) {
							e[line] = 8;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 8) {
							e[line] = 9;
						} else if (e[line] == 9) {
							e[line] = 8;
						}
						return e;
					});
					break;
				case 2:
					puzzle = puzzle.map(e => {
						if (e[line] == 8) {
							e[line] = 7;
						} else if (e[line] == 7) {
							e[line] = 8;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 8) {
							e[line] = 7;
						} else if (e[line] == 7) {
							e[line] = 8;
						}
						return e;
					});
					break;
				case 3:
					puzzle = puzzle.map(e => {
						if (e[line] == 8) {
							e[line] = 7;
						} else if (e[line] == 7) {
							e[line] = 9;
						} else if (e[line] == 9) {
							e[line] = 8;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 8) {
							e[line] = 7;
						} else if (e[line] == 7) {
							e[line] = 9;
						} else if (e[line] == 9) {
							e[line] = 8;
						}
						return e;
					});
					break;
				case 4:
					puzzle = puzzle.map(e => {
						if (e[line] == 7) {
							e[line] = 9;
						} else if (e[line] == 9) {
							e[line] = 7;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 7) {
							e[line] = 9;
						} else if (e[line] == 9) {
							e[line] = 7;
						}
						return e;
					});
					break;
				case 5:
					puzzle = puzzle.map(e => {
						if (e[line] == 4) {
							e[line] = 5;
						} else if (e[line] == 6) {
							e[line] = 4;
						} else if (e[line] == 5) {
							e[line] = 6;
						}
						return e;
					});
					solution = solution.map(e => {
						if (e[line] == 4) {
							e[line] = 5;
						} else if (e[line] == 6) {
							e[line] = 4;
						} else if (e[line] == 5) {
							e[line] = 6;
						}
						return e;
					});
					break;
			}
		}
		return {
			puzzle: puzzle,
			solution: solution
		}
	}
	
	mixMix(puzzle,solution) {
		puzzle = this.getCoord(puzzle);
		solution = this.getCoord(solution);
		let count = Math.ceil(Math.random() * 3);;
		if (count == 1) {
			let regCol = Math.ceil(Math.random() * 3);
			let rng = Math.ceil(Math.random() * 5);
			let obj = this.mixLines(puzzle,solution,"column",regCol,rng);
			puzzle = obj.puzzle;
			solution = obj.solution;
		} else if (count == 2) {
			let rCols = [1,2,3];
			let regCol1 = rCols.splice(Math.floor(Math.random() * rCols.length,1))[0];
			let regCol2 = rCols.splice(Math.floor(Math.random() * rCols.length,1))[0];
			let rng1 = Math.ceil(Math.random() * 5);
			let rng2 = Math.ceil(Math.random() * 5);
			let obj = this.mixLines(puzzle,solution,"column",regCol1,rng1);
			puzzle = obj.puzzle;
			solution = obj.solution;
			obj = this.mixLines(puzzle,solution,"column",regCol2,rng2);
			puzzle = obj.puzzle;
			solution = obj.solution;
		} else {
			let rng1 = Math.ceil(Math.random() * 5);
			let rng2 = Math.ceil(Math.random() * 5);
			let rng3 = Math.ceil(Math.random() * 5);
			let obj = this.mixLines(puzzle,solution,"column",1,rng1);
			puzzle = obj.puzzle;
			solution = obj.solution;
			obj = this.mixLines(puzzle,solution,"column",2,rng2);
			puzzle = obj.puzzle;
			solution = obj.solution;
			obj = this.mixLines(puzzle,solution,"column",3,rng3);
			puzzle = obj.puzzle;
			solution = obj.solution;
		}
		count = Math.ceil(Math.random() * 3);
		if (count == 1) {
			let regRow = Math.ceil(Math.random() * 3);
			let rng = Math.ceil(Math.random() * 5);
			let obj = this.mixLines(puzzle,solution,"row",regRow,rng);
			puzzle = obj.puzzle;
			solution = obj.solution;
		} else if (count == 2) {
			let rRows = [1,2,3];
			let regRow1 = rRows.splice(Math.floor(Math.random() * rRows.length,1))[0];
			let regRow2 = rRows.splice(Math.floor(Math.random() * rRows.length,1))[0];
			let rng1 = Math.ceil(Math.random() * 5);
			let rng2 = Math.ceil(Math.random() * 5);
			let obj = this.mixLines(puzzle,solution,"row",regRow1,rng1);
			puzzle = obj.puzzle;
			solution = obj.solution;
			obj = this.mixLines(puzzle,solution,"row",regRow2,rng2);
			puzzle = obj.puzzle;
			solution = obj.solution;
		} else {
			let rng1 = Math.ceil(Math.random() * 5);
			let rng2 = Math.ceil(Math.random() * 5);
			let rng3 = Math.ceil(Math.random() * 5);
			let obj = this.mixLines(puzzle,solution,"row",1,rng1);
			puzzle = obj.puzzle;
			solution = obj.solution;
			obj = this.mixLines(puzzle,solution,"row",2,rng2);
			puzzle = obj.puzzle;
			solution = obj.solution;
			obj = this.mixLines(puzzle,solution,"row",3,rng3);
			puzzle = obj.puzzle;
			solution = obj.solution;
		}
		return {
			puzzle: this.reJoin(puzzle),
			solution: this.reJoin(solution)
		}
	}
	
}
