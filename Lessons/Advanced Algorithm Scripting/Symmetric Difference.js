function sym(args) {

	var arrs = [];
	arrs = Array.prototype.slice.call(arguments);
	
	function reduceArrs(n1, n2){
		//console.log(n1, n2);
		var result = [];
		n1.filter(function(n){
			//console.log(n);
			if(!n2.includes(n)){
				if (result.indexOf(n) < 0){
					result.push(n);
				}
			
			}		
		});
		n2.filter(function(n){
			//console.log(n);
			if(!n1.includes(n)){	
				if (result.indexOf(n) < 0){
					result.push(n);
				}
			}		
		});

		console.log(result);
		return result;
	}

  return arrs.reduce(reduceArrs);
}

//console.log(sym([1, 2, 3], [5, 2, 1, 4]));//
//console.log(sym([1, 2, 3], [5, 2, 1, 4]));//should contain only three elements.
//console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); //should return [1, 4, 5]
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); //should return [1, 4, 5].
// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).