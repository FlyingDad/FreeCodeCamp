const makeStringsFromGrid = matrix => {
	let rows = matrix.length - 1;
	let cols = matrix[0].length - 1;

	let squares = [];

	for(let r = 0; r < rows; r++) {
		
		for(let c = 0; c < cols; c++) {
			let str = '';
			str += matrix[r][c]
			str += matrix[r][c+1]
			str += matrix[r+1][c]
			str += matrix[r+1][c+1]
			squares.push(str)
		}	
	}
	let set = new Set(squares);
};



function differentSquares(matrix) {
	let rows = matrix.length - 1;
	let cols = matrix[0].length - 1;

	let squares = [];

	for(let r = 0; r < rows; r++) {
		
		for(let c = 0; c < cols; c++) {
			let str = '';
			str += matrix[r][c]
			str += matrix[r][c+1]
			str += matrix[r+1][c]
			str += matrix[r+1][c+1]
			squares.push(str)
		}	
	}
	let set = new Set(squares);
	
	return set.size;
}


// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

// Example

let matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
					[2, 2, 1]]
					
					// Here are all 6 different 2 × 2 squares:

// 1 2
// 2 2
// 2 1
// 2 2
// 2 2
// 2 2
// 2 2
// 1 2
// 2 2
// 2 3
// 2 3
// 2 1
// the output should be
console.log(differentSquares(matrix));// = 6.