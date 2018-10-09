
function commonCharacterCount(s1, s2) {
	let array1 = s1.split('');
	let array2 = s2.split('');
	let count = 0;
	// iterate over each char in s1
	// if s1 char in s2, add one to count, and remove from s2
	array1.forEach(char => {
		let index = array2.indexOf(char);
		//console.log(char, index);
		if(index >= 0){
			//console.log(index);
			count++;
			array2.splice(index, 1);
		}
	});
	return count
}
// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

let s1 = 'aabcc';
let s2 = 'adcaa';
console.log(commonCharacterCount(s1, s2));