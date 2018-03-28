function telephoneCheck(str) {
	// Good luck!
	//if firt char is NaN and not a '(' return false
	if(isNaN(str.charAt(0))&&str.charAt(0)!= '(') {return false;}
	// if first char is a '(', check for matching ')'
	if(str.charAt(0) == '(' && str.charAt(4) != ')'){return false;}
	// strip all non numerics and check length, if less than 10 return false
	var stripped = str.replace(/\D/g, '');
	console.log(stripped);
	//check for invslid lengths, must be 10 or 11
	if(stripped.length < 10 || stripped.length > 11) { return false;}
	if(stripped.length == 11){
		console.log(stripped.charAt(0));
		if(stripped.charAt(0) != 1) {return false;}
	}
	var regex = /(\([\d]{3}\)|[\d]{3})[-. ]?[\d]{3}[-. ]?[0-9]{4}/g;


	return regex.test(str);
}



//console.log(telephoneCheck("800-692-7753"));
//console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
// console.log(telephoneCheck("555 555 5555"));
// console.log(telephoneCheck("5555555555"));
// console.log(telephoneCheck("1 555-555-5555"));
// console.log(telephoneCheck("6505552368")); //false
// console.log(telephoneCheck("27576227382"));

// Return true if the passed string is a valid US phone number.

// The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.