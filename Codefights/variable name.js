function variableName(name) {
	// ^[a-zA-Z 0-9\_]*$
	// let pattern = /[a-zA-Z 0-9\_]/
	var regex = new RegExp(/^[a-zA-Z\_][a-zA-Z0-9\_]*$/gm);
	console.log(regex.test(name));
	return '-----'
}


// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

// Example

let name = "var_1__Int"//, the output should be
console.log(variableName(name))// = true;
name = "qq-q"//, the output should be
console.log(variableName(name))// = false;
name = "2w2"//, the output should be
console.log(variableName(name))// = false.