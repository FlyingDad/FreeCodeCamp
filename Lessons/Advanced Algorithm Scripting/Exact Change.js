function checkCashRegister(price, cash, cid) {
  var billValues = [
		{ name: 'ONE HUNDRED', val: 100.00},
		{ name: 'TWENTY', val: 20.00},
		{ name: 'TEN', val: 10.00},
		{ name: 'FIVE', val: 5.00},
		{ name: 'ONE', val: 1.00},
		{ name: 'QUARTER', val: 0.25},
		{ name: 'DIME', val: 0.10},
		{ name: 'NICKEL', val: 0.05},
		{ name: 'PENNY', val: 0.01}
	];
	
	// Here is your change, ma'am.
	// Sum cash in drawer and create object for cash in drawer

	var totalCashInDrawer = cid.reduce(function(acc, currentValue){
		acc.sum += currentValue[1];
		acc[currentValue[0]] = currentValue[1];
		return acc;
	}, {sum: 0});

	//totalCashInDrawer.sum = precisionRound(totalCashInDrawer, 2);

	// CHeck if enough cash in drawer for change, if not, insufficient funds
	if(cash - price > totalCashInDrawer.sum){
		return "Insufficient Funds";
	} else if (cash - price === totalCashInDrawer.sum){
		return "Closed";
	}

	var change = cash - price;
	var changeArr = billValues.reduce(function(totalChange, curr) {
    var value = 0;

    while (totalCashInDrawer[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      totalCashInDrawer[curr.name] -= curr.val;
      value += curr.val;
      change = precisionRound(change, 2);
    }
    if (value > 0) {
			totalChange.push([ curr.name, value ]);
		}
		
    return totalChange; 
	}, []); 
	
	if (changeArr.length < 1 || change > 0) {
		return "Insufficient Funds";
	}

	function precisionRound(number, precision) {
		var factor = Math.pow(10, precision);
		return Math.round(number * factor) / factor;
	}

  return changeArr;
}



console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // insufficient funds

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

// Otherwise, return change in coin and bills, sorted in highest to lowest order.