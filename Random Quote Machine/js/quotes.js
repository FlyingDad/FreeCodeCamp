// Random Dinold Trump Quote API:
//https://api.whatdoestrumpthink.com/api/v1/quotes/random

$(document).ready(function(){

  getQuote();

  $('.getQuoteBtn').click(function(){
    getQuote();
  });

  function getQuote() {
    $.getJSON( "https://api.whatdoestrumpthink.com/api/v1/quotes/random", function( data ) {
      var items = '';
      $.each( data, function( key, val ) {
        if(key=='message'){
          items = val;
        }
      });

      $('#message').text(items);
    });
  }

});
