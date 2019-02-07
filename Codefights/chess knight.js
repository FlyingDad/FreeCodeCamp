let knightMoves = [[-2, -1], [-2, 1],[-1, -2],[-1, 2],[1, -2],[1, 2], [2, -1], [2,1]];

// grids are 1-8
const convertToGrid = location => {
	let grid = [];
	grid.push(location.charCodeAt(0) - 96);
	grid.push(Number(location.charAt(1)));
	return grid;
}

function chessKnight(cell) {
	let possibleMoves = 8;
	let gridLocation = convertToGrid(cell);

	knightMoves.forEach(move => {
		let possibleMove = [move[0] + gridLocation[0], move[1] + gridLocation[1]]
		console.log(possibleMove)
		if(possibleMove[0] < 1 || possibleMove[0] > 8 || possibleMove[1] < 1 || possibleMove[1] > 8) {
			possibleMoves -= 1;
		}
	})
	return possibleMoves;
}

// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

//Example

let cell = "a1"//, the output should be
console.log(chessKnight(cell))// = 2.
cell = "c2"//, the output should be
console.log(chessKnight(cell));// = 6.