var ForecastOutput = (function() {

  var mainWeatherOutputDiv = document.getElementById("main-weather-output");
  var sntWeatObj;

  return {
    displayCurrent: function() {
      console.log("One Day");


    },

    displayFiveDay: function() {
      console.log("Five Day");

    },

    displayTenDay: function() {
      console.log("Ten Day");

    },

    generalContentDisplay: function(sentParsedWeatherObject) {
      console.log(sntWeatObj);
      sntWeatObj = sentParsedWeatherObject;

      mainWeatherOutputDiv.innerHTML = `<p class=headline>Here's the ${sntWeatObj.cnt} day forecast for ${sntWeatObj.city.name} in ${sntWeatObj.city.country}</p>`;
    
      if (sntWeatObj.cnt === 1){
        var funcVar = "displayOneDay";
      } else if (sntWeatObj.cnt === 5) {
        var funcVar = "displayFiveDay";
      } else if (sntWeatObj.cnt === 10) {
        var funcVar = "displayTenDay";
      };

      ForecastOutput[funcVar](sntWeatObj);
    },

    timeToHuman: function() {
      var theDate = new Date(document.u2h.timeStamp.value * 1000);
      dateString = theDate.toGMTString();
    }

  };



})(ForecastOutput || {});