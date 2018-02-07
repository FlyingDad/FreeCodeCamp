// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
	var lowerArr = arr.map(function(word) {return word.toLowerCase();});
	console.log(lowerArr);
	for(var i = 0; i < arr[1].length; i++){
		console.log(lowerArr[0], lowerArr[1]);
		console.log((lowerArr[0].indexOf(lowerArr[1])));
		if (lowerArr[0].indexOf(lowerArr[1][i]) == -1){
			return false;
		}
	}
	return true;
  }
  
  //console.log(mutation(["Hello", "hel"]));
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));// should return true.);