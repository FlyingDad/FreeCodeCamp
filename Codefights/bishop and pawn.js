const getCellColor = cell => {
	// let callArr = cell.split('')
	const cell1 = cell.charCodeAt(0) % 2;
	const cell2 = cell.charAt(1) % 2;
	if(cell1 == cell2) {
		return 'black'
	} else {
		return 'white'
	}
}

const convertToGrid = location => {
	let grid = [];
	grid.push(location.charCodeAt(0) - 96);
	grid.push(Number(location.charAt(1)));
	return grid;
}



function bishopAndPawn(bishop, pawn) {
	if(getCellColor(bishop) != getCellColor(pawn)) {
		return false;
	} 
	let bishopGrid = convertToGrid(bishop);
	let pawnGrid = convertToGrid(pawn);
	if(bishopGrid[0] == pawnGrid[0] ||bishopGrid[1] == pawnGrid[1]) {
		return false;
	}
	console.log(bishopGrid, pawnGrid)
	let xDiff = pawnGrid[0] - (pawnGrid[0] - bishopGrid[0]);
	let yDiff = pawnGrid[1] - (pawnGrid[1] - bishopGrid[1]);
	console.log(xDiff, yDiff)
	if(xDiff == bishopGrid[0] && yDiff == bishopGrid[1]) {
		return true
	}

	return '==='
}


let bishop = "a1", pawn = "c3"//, the output should be
console.log(bishopAndPawn(bishop, pawn));// = true.
bishop = "h1", pawn = "h3"//, the output should be
console.log(bishopAndPawn(bishop, pawn));// = true.