/* jshint esversion: 6 */

$( document ).ready(function() {
	console.log( "ready!" );

let accumulator = 0;
let inputReg = 0;
let sign = true;   // true = pos, false: neg number
let calcInProgress = false; // true = button pessed)except equal


	$('.jqbtn').on('click', function(){
		var input = $(this).attr('data-value');
		//console.log('Press: ' + $(this).attr('data-value'));
		display(input);
		checkButtonType(input);
	});

	// Check button type, and perform action
	function checkButtonType(input){
		console.log("Check: " + input);
		if(input == 'x' || input == '/' || input == '+' || input == '-') {
			console.log('do math');
			display('math');
		} else if(input == 'ac' || input == 'ce') {
			console.log('clear');
			display('clear');
		} else if(input == 'sign'){
			console.log('change sign');
		} else if (input == '.'){
			console.log('decimal');
		} else if (input == '='){
			console.log('equal');
		} else {
			console.log('number');
		}

	}
	// Calulation button pressed
	

	// Equal pressed
	$('.equal').on('click', function() {
		display('====');
	});



	function display(result){
		//console.log(result);
		$('.col-display h2').text(result);
	}

});