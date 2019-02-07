function lineEncoding(s) {
	let arr = s.split('');
	let encodedString = '';
	let count = 1;
	for(let i = 1; i <= arr.length; i++) {
		if(arr[i] != arr[i-1]) {
			if(count === 1) {
				encodedString += arr[i - 1];
			} else {
				encodedString += count + arr[i - 1];
			}
			currentLetter = arr[i];
			count = 1;
		} else {
			count += 1;
		}
	}

	console.log(encodedString);
	return '---';
}

// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
// Example

let s = 'aabbbc'; //, the output should be
console.log(lineEncoding(s)); // = "2a3bc"
s = 'abbcabb';
console.log(lineEncoding(s))// = "a2bca2b"
