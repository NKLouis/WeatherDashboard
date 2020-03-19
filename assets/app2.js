
// 5 days forcast


$('#find-city').on('click', function (event) {
  event.preventDefault()
  var cityName = $('#city-input').val();
  console.log(cityName);


  var APIKey = "7da650cba6235b7ab4a1ab6820f4f5e7";
  //var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName + APIKey;
  var queryURL5Day = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;
  //console.log(queryURL);
  console.log(queryURL5Day);
  //function citySearch (cityInput){

  $.ajax({
    url: queryURL5Day,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      for (var i = 0; i < response.list.length; i++) {
        if (response.list[i].dt_txt.indexOf("00:00:00") !== -1) {
          var Div = $("<div>")
          Div.addClass('card')
          var cardBody = $("<div>")
          cardBody.addClass("card-body")

          var month = moment().format("M");
          var date = moment().format("D");
          var year = moment().format("YYYY");
          console.log(date);

          $("<p class = 'card-text'>").text( response.city.name +" (" + month + "/" + date + "/" + year + ")").appendTo(cardBody);
          $("<p class = 'card-text'>").text("Icon :" + response.list[i].weather[0].icon).appendTo(cardBody);
          $("<p class = 'card-text'>").text("Temperature: " + Math.floor(Fahrenheit) + "F").appendTo(cardBody);
          $("<p class = 'card-text'>").text("Wind-speed: " + response.list[i].wind.speed).appendTo(cardBody);
          $("<p class = 'card-text'>").text("Humidity: " + response.list[i].main.humidity).appendTo(cardBody);

          Div.append(cardBody);


          var kelvin = response.list[i].main.temp;
          var Fahrenheit = (kelvin - 273.15) * 1.80 + 32;

          console.log('Fahrenheit :' + Fahrenheit);

          $("#5Days").append(Div);

        }

        console.log(queryURL5Day);



      }
    });

});



