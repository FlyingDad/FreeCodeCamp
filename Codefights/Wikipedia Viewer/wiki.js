/* jshint esversion: 6 */

$( document ).ready(function() {

	const testurl1 = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
	const callback = '&callback=?'
  const api = "https://en.wikipedia.org//w/api.php?action=query&format=json&list=search&utf8=1&srsearch=";
  let searchTxt = "Mars";
	//console.log( "ready!" );
	const resultsContainer = $('.results')
	$.getJSON( testurl1 + searchTxt + callback, function( data ) {
	})
	.done(function( data ) {
		//console.log(data);
		$.each( data.query.pages, function( i, item ) {
			//console.log(i, item);
			$('#results').append(`<div class="row"><div class="col-sm"><h3>${item.title}</h3><p>${item.extract}</p></div></div>`);
		});
		//have to add after rows are created
		addClickEvent();
	})
	.fail(function(error){
		console.warn(error);
		$('#results').append(`<div class="row"><h3>Error processing request. Please try again.</h3></div`);
	});

	function addClickEvent(){
		$('.row').click(function(){
			console.log('clicked');
		});
		$('.row').hover(function() {
			$(this).css("background-color", "yellow");
		}, 
		function(){
    $(this).css("background-color", "aquamarine");
		});
	}


});// end of doc ready



