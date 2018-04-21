function updateInventory(arr1, arr2) {
	// All inventory must be accounted for or you're fired!
	var currentInv = arr1.slice(0);
	var newInv = arr2.slice(0);
	var newItems = [];
	for(var i= 0; i < newInv.length; i++){
		var match = false;
		for(var j = 0; j < currentInv.length; j++){
			if(currentInv[j][1]==newInv[i][1]){
				match = true;
				currentInv[j][0] += newInv[i][0];
				break;
			}
		}
		console.log(match);
		if(!match){
			newItems.push(newInv[i]);
		}
	}
	//add new items to inventory
	newItems.forEach(function(item){
		currentInv.push(item);
	});

	function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}
	
	return currentInv.sort(sortFunction);
}

// Example inventory lists
var curInv = [
	[21, "Bowling Ball"],
	[2, "Dirty Sock"],
	[1, "Hair Pin"],
	[5, "Microphone"]
];

var newInv = [
	[2, "Hair Pin"],
	[3, "Half-Eaten Apple"],
	[67, "Bowling Ball"],
	[7, "Toothpaste"]
];

//console.log(updateInventory(curInv, newInv));
console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])); //[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]


// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

