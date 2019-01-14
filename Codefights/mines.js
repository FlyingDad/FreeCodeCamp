let getMineCount = (arr, x, y) => {
	let mines = 0;
	console.log('x, y: ', x, y);
	if (y > 0) {
		//left
		if (arr[x][y - 1] != undefined) {
			if (arr[x][y - 1]) {
				mines++;
				console.log('left');
			}
		}
	}
	if (y < arr[x].length - 1) {
		if (arr[x][y + 1] != undefined) {
			if (arr[x][y + 1]) {
				mines++;
				console.log('right');
			}
		}
	}
	if (x > 0) {
		if (arr[x - 1][y] != undefined) {
			if (arr[x - 1][y]) {
				mines++;
				console.log('up');
			}
		}
	}
	if (x < arr.length - 1) {
		if (arr[x + 1][y] != undefined) {
			if (arr[x + 1][y]) {
				mines++;
				console.log('down');
			}
		}
	}

	return mines;
};

function minesweeper(matrix) {
	let mineField = [];
	console.log(matrix);

	// console.log('minecount ', getMineCount(matrix, 2, 1));

	// let horizBoxes = image.length - 3;
	// let vertBoxes = image[0].length -3;
	// console.log('c, r: ' , )
	for (let i = 0; i < matrix[0].length; i++) {
		let col = [];
		for (let j = 0; j <= matrix.length; j++) {
			console.log(i, j)
			let mines = getMineCount(i, j);
			col.push(mines);
		}
		mineField.push(col);
	}
	// return mineField;
	return '----------------';
}

matrix = [[true, false, false], [false, true, false], [false, false, false]];
console.log(minesweeper(matrix));
//[[1, 2, 1],
// [2, 1, 1],
// [1, 1, 1]]
