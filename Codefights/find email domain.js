function findEmailDomain(address) {
	let re = /(@[a-zA-Z]+.)\w+/
	let result = address.match(re)[0];
	return result.slice(1)
}

// An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").

// The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.

// Given a valid email address, find its domain part.

// Example

let address = "prettyandsimple@example.com";//, the output should be
console.log(findEmailDomain(address));// = "example.com";
address = '<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org';// the output should be
console.log(findEmailDomain(address));// = "example.org".