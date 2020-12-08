$('#button1').click(function() {

    $.ajax({
        url: "/libs/php/weather.php",
        type: 'POST',
        //dataType: 'json',
        data: {
            //weather: $('#weather').val()
            //Gives information about Weather: $('#weatherInfo').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#Result').html(JSON.stringify(result['data']));
                

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    }); 


});
$('#button2').click(function() {

    $.ajax({
        url: "/libs/php/earthquake.php",
        type: 'POST',
        //dataType: 'json',
        data: {
            //earthquakes: $('#earthquakes').val()
            //This API returns information about Earthquakes<: $('#earthquakesInfo').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#Result').html(JSON.stringify(result['data']));

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    }); 


});
$('#button3').click(function() {

    $.ajax({
        url: "/libs/php/timezone.php",
        type: 'POST',
        //dataType: 'json',
        data: {
            //timezone: $('#timezone').val()
            //Timezone Information: $('#timezoneInfo').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#Result').html(JSON.stringify(result['data']));

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    }); 


});