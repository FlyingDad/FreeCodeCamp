function spiralNumbers(n) {
	let array = Array(n).fill().map(() => Array(n).fill(0));
	let width = array[0].length - 1;
	let spiralCount = 0;  
	let count = 1;
	// 4 loops, row, col row, col
	// horizontal - forward
	while(spiralCount < Math.floor(n/2) + 1) {

		for(let topRow = spiralCount; topRow < width - spiralCount; topRow++) {
			array[spiralCount][topRow] = count;
			count++; 
		}
		// vertical forward , last col
		for(let lastCol = spiralCount; lastCol < width + 1 - spiralCount; lastCol++) {
			array[lastCol][width - spiralCount] = count;
			count++;
		}
		// horizontal reverse, -1 length, last row
		for(let botRow = width - spiralCount - 1; botRow > spiralCount; botRow--) {
			array[width - spiralCount][botRow] = count;
			count++; 
		}
		// vertical reverse, 1st col
		for(let firstCol = width - spiralCount; firstCol >= spiralCount + 1; firstCol--) {
			array[firstCol][spiralCount] = count;
			count++;
		}

		spiralCount++;
	}

	return array;
}

// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

// Example

let n = 3;//, the output should be

// console.log(spiralNumbers(n));
//  [[1, 2, 3],
// 	[8, 9, 4],
// 	[7, 6, 5]]

n = 5;
console.log(spiralNumbers(n));
// [[1,2,3,4,5], 
//  [16,17,18,19,6], 
//  [15,24,25,20,7], 
//  [14,23,22,21,8], 
//  [13,12,11,10,9]]