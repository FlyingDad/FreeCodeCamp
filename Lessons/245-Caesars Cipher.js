function rot13(str) { // LBH QVQ VG!
	var decodedStr = '';
	for(var i = 0; i < str.length; i++){
		// Acsii caps 65 - 90
		//console.log(str.charCodeAt(i));
		var letter = str.charCodeAt(i);
		if (letter >= 65 && letter <= 90) {
			letter += 13;
			if (letter > 90){
				letter = 64 + (letter - 90);
			}
			decodedStr += String.fromCharCode(letter);
		} else {
			decodedStr += str[i];
		}
	}
	return decodedStr;
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));//"FREE CODE CAMP"
  console.log(rot13("SERR CVMMN!"));//"FREE PIZZA"
  console.log(rot13("SERR YBIR?"));//"FREE LOVE?""
  console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));//"THE QUICK BROWN..."
  console.log(rot13("LBH QVQ VG!"));//"FREE PIZZA"

//   One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.