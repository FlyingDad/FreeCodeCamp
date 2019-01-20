const isPalindrome = s => {

		if(s.length % 2 != 0){
			// remove middle letter
			s = s.slice(0, Math.floor(s.length /2)) + s.slice( Math.floor(s.length / 2) + 1)
		}
		let firstHalf = s.slice(0, s.length / 2);
		let secondHalf = s.slice(s.length / 2).split('').reverse().join('');
		// console.log('even', firstHalf, secondHalf, firstHalf == secondHalf);
		return firstHalf == secondHalf;
}


function buildPalindrome(str) {

	if(isPalindrome(str)) {
		return str;
	}
	let count = 1;
	let isPali = false;
	let possiblePali;

	while(!isPali) {
		let endStr = str.slice(0, count).split('').reverse().join('');
		possiblePali = str + endStr
		isPali = isPalindrome(str + endStr);
		console.log(isPali)
		count +=1;
	}

	return possiblePali;
}




// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

let st = "abba"//, the output should be
console.log(buildPalindrome(st));// = "abcdcba".

