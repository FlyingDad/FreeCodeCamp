$( document ).ready(function() {
	console.log( "ready!" );

	$('.jqbtn').on('click', function(){
		console.log($(this).attr('data-value'));
	});
});