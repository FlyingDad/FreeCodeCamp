function differentSymbolsNaive(s) {

	let uniqueChars = 1;
	let arr = s.split('').sort();
	let currentLetter = arr[0];

	console.log(arr)
	for(let i = 1; i < arr.length; i++) {
		console.log(currentLetter, arr[i])
		if(arr[i] != currentLetter) {
			currentLetter = arr[i];
			uniqueChars += 1;
			console.log('+1')
		}
	}
	return uniqueChars;
}

// Given a string, find the number of different characters in it.

// Example

let s = "cabca"//, the output should be
console.log(differentSymbolsNaive(s));// = 3

// There are 3 different characters a, b and c.
s = 'aba';
console.log(differentSymbolsNaive(s)); // 2