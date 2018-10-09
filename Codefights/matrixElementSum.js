/* jshint esversion: 6 */

function matrixElementsSum(matrix) {

	let freeRooms = [];
	let sum = 0;

	for(let row = 0; row < matrix.length; row++){
		for(let col = 0; col < matrix[row].length; col++){
			if(matrix[row][col] == 0){
				freeRooms.push([row, col]);
			}
			//console.log([row-1, col]);
			if(row != 0 ){
				for(let i = 0; i < freeRooms.length; i++){
					let hauntedRoom = freeRooms[i];
					if(hauntedRoom[0] == row -1 && hauntedRoom[1] == col){
						//console.log([row, col] + ' : change to 0');
						matrix[row][col] = 0;
						freeRooms.push([row, col]);
					}
				}
			}
		}
	}
	console.log(matrix);
	for(let row of matrix){
		//console.log(row);
		sum += row.reduce(function (accumulator, currentValue) {
			return accumulator + currentValue;
		}, 0);
	}
	return sum;
}

// After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.Help the bots calculate the total price of all the rooms that are suitable for them.
let matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
					[2, 0, 3, 3]];
let matrix1 = [[1,1,1,0], 
					 [0,5,0,1], 
					 [2,1,3,10]];
// Here's the rooms matrix with unsuitable rooms marked with 'x':

// [[x, 1, 1, 2], 
//  [x, 5, x, x], 
//  [x, x, x, x]]
// Thus, the answer is 1 + 5 + 1 + 2 = 9.

//console.log(matrixElementsSum(matrix));
console.log(matrixElementsSum(matrix1));