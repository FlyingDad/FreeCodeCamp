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



function chessBoardCellColor(cell1, cell2) {
	
	// let firstCell = getCellColor(cell1);
	// let secondCell = getCellColor(cell2);
	if(getCellColor(cell1) == getCellColor(cell2)) {
		return true;
	} else {
		return false;
	}

	// console.log(firstCell, secondCell)
	
	// return '---'
}

// lower left black
// lower right white
//  cols a, c .... char codes are odd
// odd odd are black
// even even are  black
// odd even are white
// even odd are white
let cell1 = "A1"
let cell2 = "C3"//, the output should be
console.log(chessBoardCellColor(cell1, cell2));// = true.