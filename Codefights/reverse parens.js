function reverseParentheses(s) {
	//console.log(s);
	let leftParenIndex = 0;
	let rightParenIndex = 0;
	let newString = s.slice();

	while(leftParenIndex >= 0) {
		leftParenIndex = newString.lastIndexOf('(')
		rightParenIndex = newString.indexOf(')', leftParenIndex)
		newString = reverseString(newString, leftParenIndex, rightParenIndex)
	}
	
	return newString
}

function reverseString(str, leftIndex, rightIndex) {
	let subString = str.slice(leftIndex, rightIndex+1);
	// remove first and last parens and reverse
	let strippedStr = subString.slice(1, subString.length - 1).split('').reverse().join('');
	// splice reversed string into str
	let newstr = str.replace(subString, strippedStr)
	return newstr;

}

console.log(reverseParentheses('a(bc)de'));
console.log(reverseParentheses("a(bcdefghijkl(mno)p)q")); //"apmnolkjihgfedcbq"
console.log(reverseParentheses("abc(cba)ab(bac)c"));
// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".

// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.
