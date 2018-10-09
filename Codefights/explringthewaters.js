/* jshint esversion: 6 */

function allLongestStrings(inputArray) {
	let longestLength = 0;
	let longestWords = [];
	for(let word of inputArray){
		if(word.length > longestLength){
			longestLength = word.length;
		}
	}
	for(let word of inputArray){
		if(word.length === longestLength){
			longestWords.push(word);
		}
	}
	return longestWords;
}


// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
let inputArray1 = ["aba", "aa", "ad", "vcd", "aba"];
console.log( allLongestStrings(inputArray1));

