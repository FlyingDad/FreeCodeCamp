const get3x3GridArray = (arr, upperLeftX, upperLeftY) => {
	let newArr = [];
	for(let row = upperLeftX; row < upperLeftX + 3; row++) {
		for(let col = upperLeftY; col < upperLeftY + 3; col++) {
			newArr.push(arr[row][col]);
		}
	}
	return newArr;
}


function sudoku(grid) {

	let goodRow = 123456789;

	// check rows and cols
	for(let row = 0; row < 9; row++) {
		let nextRow = [];
		let nextCol = [];
		for(let col = 0; col < 9; col++){
			nextRow.push(grid[row][col]);
			nextCol.push(grid[col][row])
		}
		nextRow.sort((a, b) => a - b);
		nextCol.sort((a, b) => a - b);
		if((nextRow.join('') != goodRow || nextCol.join('') != goodRow)){
			return false;
		}
	}
	//check 9 (3x3) grids
	for(let gridX = 0; gridX < 9; gridX += 3) {
		for(let gridY = 0; gridY < 9; gridY += 3) {
			let gridCheck = get3x3GridArray(grid, gridX, gridY);
			gridCheck.sort((a, b) => a - b);
			if(gridCheck.join('') != goodRow) {			
				return false;
			}
		}
	}
	return true
}

// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

// Example

// For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.

let grid = [
	[1, 3, 2, 5, 4, 6, 9, 8, 7],
	[4, 6, 5, 8, 7, 9, 3, 2, 1],
	[7, 9, 8, 2, 1, 3, 6, 5, 4],
	[9, 2, 1, 4, 3, 5, 8, 7, 6],
	[3, 5, 4, 7, 6, 8, 2, 1, 9],
	[6, 8, 7, 1, 9, 2, 5, 4, 3],
	[5, 7, 6, 9, 8, 1, 4, 3, 2],
	[2, 4, 3, 6, 5, 7, 1, 9, 8],
	[8, 1, 9, 3, 2, 4, 7, 6, 5]
]; //true
console.log(sudoku(grid));

grid = [
	[1, 3, 2, 5, 4, 6, 9, 2, 7],
	[4, 6, 5, 8, 7, 9, 3, 8, 1],
	[7, 9, 8, 2, 1, 3, 6, 5, 4],
	[9, 2, 1, 4, 3, 5, 8, 7, 6],
	[3, 5, 4, 7, 6, 8, 2, 1, 9],
	[6, 8, 7, 1, 9, 2, 5, 4, 3],
	[5, 7, 6, 9, 8, 1, 4, 3, 2],
	[2, 4, 3, 6, 5, 7, 1, 9, 8],
	[8, 1, 9, 3, 2, 4, 7, 6, 5]
]; //false

console.log(sudoku(grid));
