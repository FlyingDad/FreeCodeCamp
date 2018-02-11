$(document).ready(function(){

    var sampledata = { "coord":{ "lon":159, "lat":35 }, "weather":[ { "id":500, "main":"Rain", "description":"light rain", "icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" } ], "base":"stations", "main":{ "temp":22.59, "pressure":1027.45, "humidity":100, "temp_min":22.59, "temp_max":22.59, "sea_level":1027.47, "grnd_level":1027.45 }, "wind":{ "speed":8.12, "deg":246.503 }, "rain":{ "3h":0.45 }, "clouds":{ "all":92 }, "dt":1499521932, "sys":{ "message":0.0034, "sunrise":1499451436, "sunset":1499503246 }, "id":0, "name":"Republic", "cod":200 };

    var currentWx = new Object(),
        description = '',
        icon = '',
        temp = 0,
        humidity = 0,
        name = '',
        obj = new Object();

    var x = document.getElementById("demo");

    $('#get-location').click(function () {
        getWeather();
        // undelete for using real data
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(getWeather);
        // } else { 
        //     x.innerHTML = "Geolocation is not supported by this browser.";
        // }
        
    });

    function getWeather(position) {
        // x.innerHTML = "Latitude: " + position.coords.latitude + 
        // "<br>Longitude: " + position.coords.longitude;
        
        // url = "https://fcc-weather-api.glitch.me/api/current?lon=" + position.coords.longitude + "&lat=" + position.coords.latitude;

            $.each( sampledata, function( key, val ) {
                //console.log(key, val);
                if(key=='weather'){
                    //console.log(val[0]);

                    $.each(val[0], function(key, val){
                        if(key=='description'){
                            currentWx.description = val;
                            console.log(currentWx.description);
                        }
                        if(key=='icon'){
                            currentWx.icon = val;
                            console.log(currentWx.icon);
                        }
                    });
                }

                if(key=='main'){

                    $.each(val, function(key, val){
                        if(key=='temp'){
                            currentWx.temp = val;
                            console.log(currentWx.temp);
                        }
                        if(key=='humidity'){
                            currentWx.humidity = val;
                            console.log(currentWx.humidity);
                        }
                    });
                }
                if(key=='name'){
                    currentWx.name = val;
                    console.log(currentWx.name);
                        
                    
                }
            });      
        //});
    }
});
