function arrayReplace(inputArray, elemToReplace, substitutionElem) {
	if(elemToReplace == substitutionElem) {
		return inputArray;
	}
	let index = inputArray.indexOf(elemToReplace);
	while(index >= 0) {
		inputArray.splice(index, 1, substitutionElem);
		index = inputArray.indexOf(elemToReplace);
	}
	return inputArray
}

// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

// Example

let inputArray = [1, 2, 1], elemToReplace = 1, substitutionElem = 3;// the output should be
console.log(arrayReplace(inputArray, elemToReplace, substitutionElem));// = [3, 2, 3].
inputArray = [1, 2, 1, 2, 1], elemToReplace = 2, substitutionElem = 2;// 
console.log(arrayReplace(inputArray, elemToReplace, substitutionElem));



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// 0 ≤ inputArray[i] ≤ 10.

// [input] integer elemToReplace

// Guaranteed constraints:
// 0 ≤ elemToReplace ≤ 10.