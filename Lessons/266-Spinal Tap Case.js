function spinalCase(str) {
	// "It's such a fine line between stupid, and clever."
	// --David St. Hubbins
	str = str.replace(/_/ig, '');
	var regex = / [A-Z]/g;
	str = str.replace(regex, function(match){
		return match.toLowerCase();
	});
	var regex1 = /[A-Z]/g;
	str = str.replace(regex1, function(match, offset){
		if(offset != 0){
			return ' ' + match.toLowerCase();
		}else {
			return match.toLowerCase();
		}
		
	});
	str = str.replace(/\s/ig, '-');
	//str = str.replace(/_/ig, '-');
	return str;
}

console.log(spinalCase("This Is Spinal Tap"));// should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap"));// should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show"));// should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh"));// should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things"));// should return "all-the-small-things".


//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.