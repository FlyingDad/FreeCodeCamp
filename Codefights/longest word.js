function longestWord(text) {
	let re = /[a-zA-Z]+/g
	let arr = text.match(re);
	// console.log(result)
	// let arr = text.split(', ');
	let longestWord = 0;
	let longestIndex = 0;
	arr.forEach((word, index) => {
		if(word.length > longestWord) {
			longestWord = word.length;
			longestIndex = index;
		};
	});
	return arr[longestIndex];
}

// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

// Example

let text = "Ready, steady, go!";//, the output should be
console.log(longestWord(text));// = "steady".