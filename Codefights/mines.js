let getMineCount = (arr, x, y) => {
	let mines = 0;
	// console.log('x, y: ', x, y);
	// console.log(arr.length, arr[0].length)
	for (let row = x - 1; row <= x + 1; row++) {
		// console.log('col, ', col)
		if(row < 0 || row >= arr.length) {
			// console.log('row skipped', row)
			continue;
		}
		// console.log('passing col: ', col)
		for (let col = y - 1; col <= y + 1; col++) {
			// console.log('row', row);
			// console.log(col, row)
			if (col < 0 || col >= arr[0].length) {
				// console.log('col skipped', col)
				continue;
			}
			if (row == x && col == y) {
				continue;
			} else {
				// console.log('passing screen ', row, col);
			}
			// console.log('----mine?', col, row, arr[col][row]);
			// // console.log('same spot? ',col != x)

			if (arr[row][col] === true) {
				// console.log('adding mine', row, col);
				mines++;
			}
		}
	}
	return mines;
};

function minesweeper(matrix) {
	let mineField = [];
	// console.log(matrix);
	// let mines = getMineCount(matrix, 1, 2);
	for (let row = 0; row < matrix.length; row++) {
		let sonarRow = [];
		for (let col = 0; col < matrix[0].length; col++) {
			let mines = getMineCount(matrix, row, col);

			// console.log(row, col, mines)
			sonarRow.push(mines);
			// console.log('--')
		}
		mineField.push(sonarRow);
	}
	return mineField;
	// console.log(mineField);
	// return '---------';
}

matrix = [[true, false, false], [false, true, false], [false, false, false]];
console.log(minesweeper(matrix));
//[[1, 2, 1],
// [2, 1, 1],
// [1, 1, 1]]

matrix = [[false, false, false], [false, false, false]];

 console.log(minesweeper(matrix));

matrix = [
	[true, false, false, true],
	[false, false, true, false],
	[true, true, false, true]
];

console.log(minesweeper(matrix));
//  [[0,2,2,1],
//   [3,4,3,3],
//   [1,2,3,1]]



	// 	// sum += arr[col][row];
	// }
	// }

	// if(arr[x][y]) {
	// 	mines++;
	// }
	// if (y > 0) {
	// 	//left
	// 	if (arr[x][y - 1] != undefined) {
	// 		if (arr[x][y - 1]) {
	// 			mines++;
	// 			console.log('left');
	// 		}
	// 	}
	// }
	// if (y < arr[x].length - 1) {
	// 	if (arr[x][y + 1] != undefined) {
	// 		if (arr[x][y + 1]) {
	// 			mines++;
	// 			console.log('right');
	// 		}
	// 	}
	// }
	// if (x > 0) {
	// 	if (arr[x - 1][y] != undefined) {
	// 		if (arr[x - 1][y]) {
	// 			mines++;
	// 			console.log('up');
	// 		}
	// 	}
	// }
	// if (x < arr.length - 1) {
	// 	if (arr[x + 1][y] != undefined) {
	// 		if (arr[x + 1][y]) {
	// 			mines++;
	// 			console.log('down');
	// 		}
	// 	}
	// }
	// console.log('returning ', mines)