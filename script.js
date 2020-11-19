$('#button1').click(function() {

    $.ajax({
        url: "libs/php/WeatherInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            Weather: $('#weather').val(),
            Gives information about Weather: $('#weatherInfo').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#Result').html(result['data'][0]['Result']);
                

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});
$('#button2').click(function() {

    $.ajax({
        url: "libs/php/EearthquakesInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            Earthquakes: $('#earthquakes').val(),
            This API returns information about Earthquakes<: $('#earthquakesInfo').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#Result').html(result['data'][0]['Result']);
                

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});
$('#button3').click(function() {

    $.ajax({
        url: "libs/php/TimezoneInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            Timezone: $('#timezone').val(),
            Timezone Information: $('#timezoneInfo').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#Result').html(result['data'][0]['Result']);
                

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});