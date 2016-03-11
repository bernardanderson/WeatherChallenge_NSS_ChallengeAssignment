var parsedWeatherObject;

function parseWeather() {
  // var parsedWeatherObject = this.responseText;
  parsedWeatherObject = JSON.parse(this.responseText);
  console.log("parsedWeatherObject", parsedWeatherObject);
}

function XHRWeather() {

  var requestOpenWeather = new XMLHttpRequest();
  requestOpenWeather.addEventListener("load", parseWeather);
  requestOpenWeather.open("GET", "weather.json");
  // requestOpenWeather.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=37221,us&APPID=b65ed22c41380f0f6c0e50fae7874970");
  requestOpenWeather.send();

}

XHRWeather();

// weather API key b65ed22c41380f0f6c0e50fae7874970
