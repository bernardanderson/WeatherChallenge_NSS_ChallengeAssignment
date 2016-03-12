var ForecastOutput = (function() {

  var mainWeatherOutputDiv = document.getElementById("main-weather-output");
  var sntWeatObj; // Shortened sentWeatherObject accessable by all functions

  return {
    displayCurrent: function() {
      console.log("One Day");


    },

    displayFiveDay: function() {
      console.log("Five Day");

    },

    displayTenDay: function() {
      console.log("Ten Day");

      var dayDivHolder = document.createElement("div");
      dayDivHolder.id = "day-holder";
      dayDivHolder.classList.add("day-holder");
      mainWeatherOutputDiv.appendChild(dayDivHolder);
      
      for (var i = 0; i < sntWeatObj.list.length; i++) {
        var dayDiv = document.createElement("div");
        dayDiv.id = "day-" + i;
        dayDiv.classList.add("day-div");
        dayDivHolder.appendChild(dayDiv);
      }
    },

    generalContentDisplay: function(sentParsedWeatherObject) {
      sntWeatObj = sentParsedWeatherObject;
      console.log(sntWeatObj);

      mainWeatherOutputDiv.innerHTML = `<p class=headline>Here's your ${sntWeatObj.cnt} day forecast for ${sntWeatObj.city.name}, ${sntWeatObj.city.country}</p>`;

      if (sntWeatObj.cnt === 1){
        var funcVar = "displayOneDay";
      } else if (sntWeatObj.cnt === 5) {
        var funcVar = "displayFiveDay";
      } else if (sntWeatObj.cnt === 10) {
        var funcVar = "displayTenDay";
      };

      ForecastOutput[funcVar](sntWeatObj);
      console.log("I came back");
    },

    timeToHuman: function() {
      var theDate = new Date(document.u2h.timeStamp.value * 1000);
      dateString = theDate.toGMTString();
    }

  };



})(ForecastOutput || {});