/* jshint esversion: 6 */

function sortByHeight(a) {
	//get indexes of -1's
	let treeIndexes = [];
	a.forEach((element, index) => {
		if(element === -1){
			treeIndexes.push(index);
		}
	});
	//remove -1s
	while(a.includes(-1)){
		for(let i = 0; i < a.length; i++) {
			if(a[i] === -1){
				a.splice(i, 1);
				break;
			}
		}
	}
	a.sort(function compareNumbers(a, b) {
		return a - b;
	});
	//insert -1s back into array
	treeIndexes.forEach(e => {
		a.splice(e, 0, -1);
	});

	return a;
}


// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
const b = [4, 2, 9, 11, 2, 16]; //[2, 2, 4, 9, 11, 16]
console.log(sortByHeight(a));
console.log(sortByHeight(b));