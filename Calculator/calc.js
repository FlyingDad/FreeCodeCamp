/* jshint esversion: 6 */

$( document ).ready(function() {
	console.log( "ready!" );

let accumulator = 0;
let inputReg = 0;
let inputRegShift = 1;  // keep track of 10's
let sign = true;   // true = pos, false: neg number
let calcInProgress = false; // true = button pessed)except equal
let operation = '';

display(0);

	$('.jqbtn').on('click', function(){
		var input = $(this).attr('data-value');
		//console.log('Press: ' + $(this).attr('data-value'));
		//display(input);
		checkButtonType(input);
	});

	// Check button type, and perform action
	function checkButtonType(input){
		console.log("Check: " + input);
		if(input == 'x' || input == '/' || input == '+' || input == '-') {
			//console.log('do math');
			//display('math');
			performCalc(input);
		} else if(input == 'ac' || input == 'ce') {
			clear();
		} else if(input == 'sign'){
			console.log('change sign');
		} else if (input == '.'){
			console.log('decimal');
		} else {
			numberPressed(input);
		}
	}
	// Calulation button pressed
	function performCalc(calcType){
		if(!calcInProgress){
			console.log('no-calc', calcType);
			accumulator = inputReg;
			operation = calcType;
			inputReg = 0;
		} else {
			switch(operation) {
				case '+':
				  operation = calcType;
					console.log('adding');
					accumulator += inputReg;
					clearEntry();
					display(accumulator);
					break;
			}
		}
		calcInProgress = true;
	}

	function equalPressed(){
		console.log('equal: ' + operation)
		performCalc(operation);
	}
	// All Clear pressed
	function clear() {
		accumulator = 0;
		inputReg = 0;
		inputRegShift = 1;
		sign= true;
		display(0);
	}

	function clearEntry() {
		inputReg = 0;
		inputRegShift = 1;
		display(0);
	}
	// Clear Entry pressed
	// Number pressed
	function numberPressed(number){
		//if first number pressed, put it in indexreg
		let val = Number(number);
		if(inputReg === 0){
			inputReg += val;
		} else {
			//shift number left ( x 10)
			inputReg *= 10;
			inputReg += val;
		}	
		display(inputReg);
	}
	// Equal pressed
	$('.equal').on('click', function() {
		equalPressed();
	});

	function display(result){
		console.log('result: ' + result);
		$('.col-display h2').text(result.toString());
		$('#acc').text(accumulator);
		$('#ireg').text(inputReg);
		$('#ctype').text(operation);
	}

});