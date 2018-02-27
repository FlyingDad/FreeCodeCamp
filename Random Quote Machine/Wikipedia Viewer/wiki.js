$(document).ready(function () {

	$(document).ready(function(){
        $('#btn').click(function() {
            $.ajax({
				url: 'https://en.wikipedia.org/w/api.php',
				data: {
					action: 'query',
					generator: 'search',
					gsrnamespace: 0,
					gsrsearch: 'tesla',
					gsrlimit: 5,
					prop: 'info|extracts',
					inprop: 'url',
					format: 'json',
					origin: '*'
				}
			}).done( processResult );
        });
    }); 

  function processResult(apiResult){
	 console.log(apiResult.query.pages);
     for (var i = 0; i < apiResult.query.pages.length; i++){
		 console.log(apiResult.query.pages[i]);
          $('#display-result').append('<p>'+apiResult.query.pages[i].title+'</p>');
     }
  }
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
    // function error(err) {
    //     //console.warn(`ERROR(${err.code}): ${err.message}`);
    //     $('#not-supported').text("Geolocation is not supported by this browser.");
    // }

    // //hide F/C button
    // $('#units').hide();

    // $('#get-location').click(function () {
    //     //clear not supported text if user tries again
    //     $('#not-supported').text('');
    //     navigator.geolocation.getCurrentPosition(getWeather, error);
    // });

    // $('#units').click(function () {
    //     unitsF = !unitsF;
    //     displayConvertedTemp(temperature);
    // });

    // function getWeather(position) {

    //     url = "https://fcc-weather-api.glitch.me/api/current?lon=" + position.coords.longitude + "&lat=" + position.coords.latitude;
    //     $.getJSON(url, function (data) {

    //         $.each(data, function (key, val) {
    //             if (key == 'weather') {

    //                 $.each(val[0], function (key, val) {
    //                     if (key == 'description') {
    //                         capVal = val.replace(/\b\w/g, function (l) {
    //                             return l.toUpperCase();
    //                         });
    //                         $('#condition').html(capVal);
    //                     }
    //                     if (key == 'icon') {
    //                         console.log(val);
    //                         $('#icon').attr('src', val);
    //                     }
    //                 });
    //             }

    //             if (key == 'main') {

    //                 $.each(val, function (key, val) {
    //                     if (key == 'temp') {
    //                         temperature = val;
    //                         displayConvertedTemp(val);
    //                     }
    //                     if (key == 'humidity') {

    //                         $('#humidity').html(val + '%');
    //                     }
    //                 });
    //             }
    //             if (key == 'wind') {
    //                 var windSpeed = 0;
    //                 $.each(val, function (key, val) {
    //                     if (key == 'speed') {
    //                         windSpeed = Math.round(val);
    //                     }
    //                     if (key == 'deg') {
    //                         windText = Math.round(val) + 'º @ ' + windSpeed + 'mph';
    //                         $('#winds').html(windText);
    //                     }
    //                 });
    //             }

    //             if (key == 'name') {
    //                 console.log(val);
    //                 $('#location').html(val);
    //             }
    //         });
    //         //unhide table and button
    //         $('table').css('opacity', '1.0');
    //         $('#units').show();
    //     });
    // }

    // function displayConvertedTemp(val) {
    //     if (unitsF) {
    //         val = val * 9 / 5 + 32;
    //     }
    //     var unitText = unitsF == true ? ' F' : ' C';
    //     $('#temperature').html(Math.round(val) + unitText);
    // }
});
