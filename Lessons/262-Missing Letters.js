function fearNotLetter(str) {
	while(str){
		char = str.charCodeAt(0); 
		nextChar = str.charCodeAt(1);
		if(!nextChar){
			return undefined;
		} else {
			if(char + 1 != nextChar){
				return String.fromCharCode(char + 1);
			}
		}
		str = str.slice(1);
	}
}


console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abce"));// should return "d".
console.log(fearNotLetter("abcdefghjklmno"));// should return "i".
console.log(fearNotLetter("bcd"));// should return undefined.
console.log(fearNotLetter("yz"));// should return undefined.




// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.