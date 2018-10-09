/* jshint esversion: 6 */

function reverseParentheses(s) {
	//string to array
	let arr = s.split('');
	//will hold of original array as values in parens are removed
	let modifiedArrs = [];
	let contents = [];
	//will hold each sub arr as parens are stripped
	let strippedArrs = [];
	//will hold start indexes parens of each sub array
	let startIndexes = [];
	let startParenes = false;
	//let endParen = false;

	// saves content in outer parens
	function resolveParens(arr) {
		//console.log('starting array: ' + arr);
		let foundContent = [];
		let parenCount = 0;
		let modifiedArr = [];
		let startParenCount = parenCount;
		for (let i = 0; i < arr.length; i++) {
			debugger;
			if (arr[i] == "(" && parenCount === 0) {
				startParenes = true;
				parenCount++;
				startIndexes.push(i);
			} else if(arr[i] == "(" && parenCount > 0) {
				foundContent.push(arr[i]);
				parenCount++;
			} else if (arr[i] == ")" && parenCount === 1) {
				startParenes = false;
				parenCount--;
			} else if (arr[i] == ")" && parenCount > 0) {
				foundContent.push(arr[i]);
				parenCount--;
			} else if (parenCount > 0 && parenCount < startParenCount + 2) {

				
				foundContent.push(arr[i]);
			}else if (startParenes == false){
				modifiedArr.push(arr[i]);
			}
			//console.log('pc: ' + parenCount);
		}
		// function resolveParens(arr) {
		// 	//console.log('starting array: ' + arr);
		// 	let foundContent = [];
		// 	let parenCount = 0;
		// 	let modifiedArr = [];
		// 	for (let i = 0; i < arr.length; i++) {
				
		// 		if (arr[i] == "(" && parenCount === 0) {
		// 			startParenes = true;
		// 			parenCount++;
		// 			startIndexes.push(i);
		// 		} else if(arr[i] == "(" && parenCount > 0) {
		// 			foundContent.push(arr[i]);
		// 			parenCount++;
		// 		} else if (arr[i] == ")" && parenCount === 1) {
		// 			startParenes = false;
		// 			parenCount--;
		// 		} else if (arr[i] == ")" && parenCount > 0) {
		// 			foundContent.push(arr[i]);
		// 			parenCount--;
		// 		} else if (parenCount > 0) {
		// 			foundContent.push(arr[i]);
		// 		}else if (startParenes == false){
		// 			modifiedArr.push(arr[i]);
		// 		}
		// 		//console.log('pc: ' + parenCount);
		// 	}
		//console.log('inner content: ' + foundContent);
		//let strippedArr = foundContent.filter(filterOutParen);
		//console.log(strippedArr);
		//contents.push(foundContent);
		//console.log(foundContent);
		
		//let stripped = foundContent.filter(filterOutParen);
		contents.push(foundContent);
		modifiedArrs.push(modifiedArr);
		//console.log(strippedArr);
		//return strippedArr;
		
	}

	function filterOutParen(item, index) {
		let leftParenCount = 0;
		if(item == '(' && leftParenCount === 0){
			leftParenCount++;
			startIndexes.push(index);
			return false;
		} else if(item == '(' && leftParenCount > 0){
			leftParenCount++;
			return true;
		} else if (item == ')' && leftParenCount === 0){
			return false;
		} else if (item == ')' && leftParenCount > 0) {
			leftParenCount--;
			return true;
		} else {
			return true;
		}
	}

	function getContent(){
		index = 0;
		resolveParens(arr);

		while(contents[index].includes('(')){
			resolveParens(contents[index]);
			index++;
		}
		contents.forEach(function(e){
			let stripped = e.filter(filterOutParen).reverse();
			strippedArrs.push(stripped);
		});

		//put back in array
		//arr = arr.filter(filterOutParen);
		//console.log(strippedArrs.length);
		// console.log(strippedArrs);
		console.log(modifiedArrs, strippedArrs);
		//let temp = modifiedArrs[modifiedArrs[modifiedArrs - 1]];
		//console.log(temp);
		for (let i = strippedArrs.length - 1; i >= 0; i--) {
			//console.log(i,startIndexes[i], strippedArrs[i]);
			//debugger;
			modifiedArrs[i].splice(startIndexes[i], 0,...strippedArrs[i]);
			console.log(modifiedArrs);
		}
		//console.log(temp);
		//return temp.join('');
		//console.log(strippedArrs);
		//console.log(startIndexes);
	}

	return getContent();
	//reverse contents in parens
	
	//console.log(contents);
	//let reversed = contents.reverse();
	//put back into array
	// for (let i = 0; i < contents.length; i++) {
	// 	strippedArr.splice(startIndex[0] + i, 1, contents[i]);
	// }

	//return strippedArr.join('');

	//console.log(contents, strippedArr, startIndex, reversed);
}

// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

// Example

// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".
// document.getElementById("start").addEventListener("click", function(){
	//document.getElementById("demo").innerHTML = "Hello World";
	//const s = "a(bc)de";
	const s1 = "a(bcd(efg)h)i";
//   console.log(reverseParentheses(s1));//	
// });

// const s1 = "a(bcd(efg)h)i";

let result1 = (reverseParentheses(s1));
console.log(result1);