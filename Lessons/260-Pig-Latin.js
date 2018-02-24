function translatePigLatin(str) {
	var firstChar = str.charAt(0);
	if(firstChar == 'a' || firstChar == 'e' || firstChar =='i' || firstChar =='o' || firstChar =='u'){
		return str + 'way';
	} else {
		//get consonant cluster at beginning
		str = str.substr(1);
		var nextChar = str.charAt(0);
		while(nextChar != 'a' && nextChar != 'e' && nextChar !='i' && nextChar !='o' && nextChar != 'u'){
			firstChar += nextChar;
			str = str.substr(1);
			nextChar = str.charAt(0);
		}
		return str + firstChar + 'ay';
	}
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));// should return "aliforniacay".
console.log(translatePigLatin("paragraphs"));// should return "aragraphspay".
console.log(translatePigLatin("glove"));// should return "oveglay".
console.log(translatePigLatin("algorithm"));// should return "algorithmway".
console.log(translatePigLatin("eight"));//should return "eightway".

// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.
// ascii lowercase vowels - 97, 101, 105, 111, 117,
