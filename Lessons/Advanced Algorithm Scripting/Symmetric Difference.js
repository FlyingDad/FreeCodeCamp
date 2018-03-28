function sym(args) {
	//console.log(arguments[0]);
	var arrs = arguments;
	//console.log(arrs.length);
	var result = [];
	for(var i = 0; i < arrs.length - 1; i++){
		//console.log(i);
		//if(i < args.length - 2){
			reduceArrs(i, i + 1);
		//}
		//console.log(arguments[i]);
	}

 

	function reduceArrs(n1, n2){
		// console.log(arrs[n1], arrs[n2]);
		var arr2 = [];
		var reduced = arrs[n1].filter(function(n){
			if(!arrs[n2].includes(n)){
				
				return n;
			}		
		});
		console.log(reduced, arr2);
	}

  return 'xxxx';
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));//
//console.log(sym([1, 2, 3], [5, 2, 1, 4]));//should contain only three elements.
//console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); //should return [1, 4, 5]
//console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); //should return [1, 4, 5].
// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).