function getFinalOpenedDoors (numDoors) {
  // Good luck!
  let arr = new Array(100);
	arr.fill(false, 0)
	let count = 1
  for (let i = 0; i < arr.length; i++){
    for(let j = count - 1; j < arr.length; j+=count){
      arr[j] = !arr[j]
		}
		count += 1
  }
  let openDoors = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] == true){
      openDoors.push(i + 1)
    }
  }
  return openDoors;
}

console.log(getFinalOpenedDoors())