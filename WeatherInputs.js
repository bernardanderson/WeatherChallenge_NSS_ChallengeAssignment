
var WeatherInputs = (function () {

  return {

// Parses the Json WeatherObject
    parseWeather: function() {
      var parsedWeatherObject = JSON.parse(this.responseText);
    },

// Pulls the json'd weather info from the Weather API.
    XHRWeather: function(sentZipcode, sentForecastType) {
      console.log("Your Zipcode value was:", sentZipcode);
      console.log("Your forecast value was:", sentForecastType);
      var requestOpenWeather = new XMLHttpRequest();
      requestOpenWeather.addEventListener("load", WeatherInputs.parseWeather);
      requestOpenWeather.open("GET", "weather.json");
   // requestOpenWeather.open("GET", `http://api.openweathermap.org/data/2.5/forecast/daily?id=${sentZipcode},us&cnt=${sentForecastType}&APPID=b65ed22c41380f0f6c0e50fae7874970`);

      requestOpenWeather.send();
    }
  }
})(WeatherInputs || {});


// weather API key b65ed22c41380f0f6c0e50fae7874970
// requestOpenWeather.open("GET", `http://api.openweathermap.org/data/2.5/weather?zip=${sentZipcode},us&APPID=b65ed22c41380f0f6c0e50fae7874970");
