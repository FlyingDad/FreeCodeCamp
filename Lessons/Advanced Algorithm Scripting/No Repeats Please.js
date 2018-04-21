function permAlone(str) {

	var letters = str.split('');
	var perms = [];
	//put first permutation in array
	perms.push(str);
	function generate(n, arr){
			if(n == 1){ return arr;} 
			
			for(var i = 0; i < n-1; i++){
				generate(n - 1, arr);
				if(n%2 === 0){
						//swap(arr[i], arr[n-1])
						var temp = arr[i];
						arr[i] = arr[n-1];
						arr[n-1] = temp;
						//console.log('swapping even: ' + arr);
				} else {
						//swap(arr[0], arr[n-1])
						var temp = arr[0];
						arr[0] = arr[n-1];
						arr[n-1] = temp;
						//console.log('swapping odd: ' + arr);
				}
				perms.push(arr.join(''));
			}
			generate(n - 1, arr);			
	}  // -------------- generate function
	generate(letters.length, letters);
	//console.log('Perms: ' + perms.length);
	//now we need to remove perms that have adjacent duplicate letters
	var regex = /(.)\1+/;
	var answer = [];
	perms.forEach(function(pattern, index){
		//console.log(pattern, index);
		//console.log(regex.exec(pattern));
		if(!regex.exec(pattern)){
			answer.push(pattern);
		}
	});
  return answer.length;
}

//console.log(permAlone('aab')); //2
console.log(permAlone("aabb"));//8//
//console.log(permAlone("abcdefa")); //3600



// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.