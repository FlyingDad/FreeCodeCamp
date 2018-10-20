function bubbleSort(array) {
  // change code below this line
	for(let j = array.length - 1; j > 0; j--){
		console.log(j)
		for(let i = 0; i < j; i++){
			if(array[i] > array[i + 1]) {
				let temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
			}
			console.log(array)
		}
	}

  // change code above this line
  return array;
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]