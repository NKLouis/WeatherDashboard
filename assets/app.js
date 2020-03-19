//Today waether

$('#find-city').on('click', function (event) {
  event.preventDefault()
  var cityName = $('#city-input').val();
  console.log(cityName);



  var APIKey = "7da650cba6235b7ab4a1ab6820f4f5e7";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + cityName + "&appid=" + APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {


      console.log(queryURL);
      console.log(response);
      console.log(response.name);

      var month = moment().format("M");
      var date = moment().format("D");
      var year = moment().format("YYYY");
      console.log(date);

      $(".city-name").text(response.name + ' (' + month + '/' + date + '/' + year + ') ');
      //$("date").text("Date :" + todayDate);
      $(".icon").text("Icon :" + response.weather[0].icon);
      $(".wind-speed").text("Wind-speed :" + response.wind.speed);
      $(".humidity").text("Humidity :" + response.main.humidity);

      var kelvin = response.main.temp;
      var Fahrenheit = (kelvin - 273.15) * 1.80 + 32;

      console.log('Fahrenheit :' + Fahrenheit);
      $(".temp").text(" Temperature: " + Math.floor(Fahrenheit) + "F");



      var lat = response.coord.lat;
      var lon = response.coord.lon;
      var uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
      $.ajax({
        url: uvURL,
        method: "GET"
      })
        .then(function (response) {

          console.log(response);
          $(".UV-index").text("UV :" + response.value);

        });

    });

});
















