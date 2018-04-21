var Person = function(firstAndLast) {
	// Complete the method below and implement the others similarly
	var fullName = firstAndLast;
	this.getFullName = function() {
		return fullName;
	};
	this.getFirstName = function(){
		return fullName.split(' ')[0];
	};
	this.getLastName = function() {
		return fullName.split(' ')[1];
	};
	this.setFirstName = function(firstName) {
		//console.log(firstName);
		fullName = firstName + " " + fullName.split(" ")[1];
		//console.log(fullName);
  };

  this.setLastName = function(lastName) {
    fullName = fullName.split(" ")[0] + " " + lastName;
  };

  this.setFullName = function(name) {
    fullName = name;
  };	
	
	return fullName;
};

var bob = new Person('Bob Ross');
//console.log(Object.keys(bob).length);

console.log(bob.getFirstName());
//console.log(bob.getLastName());//getLastName()
//console.log(bob.getFullName());
bob.setFirstName("Haskell");
console.log(bob.getFullName());
//setFirstName(first)
//setLastName(last)
//setFullName(firstAndLast)