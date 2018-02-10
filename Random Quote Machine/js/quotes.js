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

      //Add quote to Twitter link
      $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=trump-random-quote&related=freecodecamp&text=' + encodeURIComponent('"' + items + '"'));
      // href="https://twitter.com/share?url=https://codepen.io/FlyingDad/pen/jZBjOZ&amp;text=Trump%20Random%20Quote&amp;hashtags=trump-random-quote"
    });
  }

});
