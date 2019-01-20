const count = (str, pattern) => {
	const re = new RegExp(pattern, 'g')
  return (str.match(re) || []).length
}

function isBeautifulString(inputString) {

	let letterSet =  new Set(inputString);
	let letterCount = letterSet.size;
	let currentLetter = 97  //ascii value
	let currentCount = Infinity;
	// false if no letter a
	if(!letterSet.has(String.fromCharCode(currentLetter))){
		return false;
	}

	for(let i = 0; i < letterCount; i++) {
		let result = count(inputString, String.fromCharCode(currentLetter));
		console.log(result)
		if(result > currentCount || result === 0) {
			return false;
		} else {
			currentCount = result;
			currentLetter += 1;
		}
	}

	return true;
}

// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

// Given a string, check whether it is beautiful.

// Example

let inputString = "bbbaacdafe";//, the output should be
console.log(isBeautifulString(inputString));// = true;
inputString = "aabbb";//, the output should be
console.log(isBeautifulString(inputString));// = false;
inputString = "zaa";//, the output should be
console.log(isBeautifulString(inputString));// = false.