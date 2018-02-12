$(document).ready(function(){

    // var sampledata = { "coord":{ "lon":159, "lat":35 }, "weather":[ { "id":500, "main":"Rain", "description":"light rain", "icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" } ], "base":"stations", "main":{ "temp":22.59, "pressure":1027.45, "humidity":56, "temp_min":22.59, "temp_max":22.59, "sea_level":1027.47, "grnd_level":1027.45 }, "wind":{ "speed":8.12, "deg":246.503 }, "rain":{ "3h":0.45 }, "clouds":{ "all":92 }, "dt":1499521932, "sys":{ "message":0.0034, "sunrise":1499451436, "sunset":1499503246 }, "id":0, "name":"Republic", "cod":200 };

    var x = document.getElementById("not-supported");
    var unitsF = true // true == F   false = C
    var temperature = 0;

    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        $('#not-supported').text("Geolocation is not supported by this browser.");
    };

    //hide F/C button
    $('#units').hide();

    $('#get-location').click(function () {    
        //clear not supported text if user tries again
        $('#not-supported').text('');
        navigator.geolocation.getCurrentPosition(getWeather, error);     
    });

    $('#units').click(function () {  
        unitsF = !unitsF;     
        displayConvertedTemp(temperature);   
    });

    function getWeather(position) {
        
        url = "https://fcc-weather-api.glitch.me/api/current?lon=" + position.coords.longitude + "&lat=" + position.coords.latitude;
        $.getJSON( url, function( data ) {

            $.each( data, function( key, val ) {
                if(key=='weather'){

                    $.each(val[0], function(key, val){
                        if(key=='description'){
                            capVal = val.replace(/\b\w/g, function(l){ return l.toUpperCase() })
                            $('#condition').html(capVal);
                        }
                        if(key=='icon'){
                            console.log(val);
                            $('#icon').attr('src', val);
                        }
                    });
                }

                if(key=='main'){

                    $.each(val, function(key, val){
                        if(key=='temp'){
                            temperature = val;
                            displayConvertedTemp(val);                           
                        }
                        if(key=='humidity'){

                            $('#humidity').html(val + '%');
                        }
                    });
                }
                if(key=='wind'){
                    var windSpeed = 0;
                    $.each(val, function(key, val){
                        if(key=='speed'){
                            windSpeed = Math.round(val);
                        }
                        if(key=='deg'){
                            windText = Math.round(val) + 'º @ ' +  windSpeed + 'mph'; 
                            $('#winds').html(windText);
                        }
                    });
                }
                
                if(key=='name'){
                    console.log(val);
                    $('#location').html(val);                    
                }
            }); 
            //unhide table and button
            $('table').css('opacity', '1.0');  
            $('#units').show();   
        });
    }

    function displayConvertedTemp(val){
        if(unitsF){
            val =  val * 9/5 + 32;
        }
        var unitText = unitsF == true ? ' F' : ' C';
        $('#temperature').html(Math.round(val) + unitText);
    }
});
