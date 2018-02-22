function myReplace(str, before, after) {
	var strArr = str.split(' ');
	for(var i =0; i < strArr.length; i++){
		if(strArr[i] === before){
			if(strArr[i].charCodeAt(0) < 91){
				strArr.splice(i, 1, after.ucfirst());
			} else {
				strArr.splice(i, 1, after);
			}	
		}
	}
	return strArr.join(' ');
}

String.prototype.ucfirst = function()
{
    return this.charAt(0).toUpperCase() + this.substr(1);
};

console.log(myReplace("Let us go to the store", "store", "mall"));// should return "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));// should return "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));// should return "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john"));// should return "His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));// should return "Let us get back to more Algorithms".