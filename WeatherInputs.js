// This functions handles the XHR Open Weather API pulls and the parsing
//  of the response for general use
var WeatherInputs = (function () {

  return {

// Parses the Json WeatherObject and sends the object to the DOM
//  display function.
    parseWeather: function() {
      var parsedWeatherObject = JSON.parse(this.responseText);
      ForecastOutput.generalContentDisplay(parsedWeatherObject);
    },

// Pulls the json'd weather info from the Weather API based on the zipcode
//  from the DOM and which forcast was selected
    XHRWeather: function(sentZipcode, sentForecastType) {
      var requestOpenWeather = new XMLHttpRequest();
      requestOpenWeather.addEventListener("load", WeatherInputs.parseWeather);
      requestOpenWeather.open("GET", "weather-10.json");
   // requestOpenWeather.open("GET", `http://api.openweathermap.org/data/2.5/forecast/daily?id=${sentZipcode},us&cnt=${sentForecastType}&APPID=b65ed22c41380f0f6c0e50fae7874970`);
      requestOpenWeather.send();
    }
  }
})(WeatherInputs || {});

// This code below accesses a single day forcast (which contains more
//  info than the mulitday forcasts)
// requestOpenWeather.open("GET", `http://api.openweathermap.org/data/2.5/weather?zip=${sentZipcode},us&APPID=b65ed22c41380f0f6c0e50fae7874970");

// my weather API key b65ed22c41380f0f6c0e50fae7874970
