var ForecastOutput = (function() {

  var mainWeatherOutputDiv = document.getElementById("main-weather-output");
  var sntWeatObj; // Shortened sentWeatherObject accessable by all functions

  return {

    buildDiv: function() {
      for (var i = 0; i < sntWeatObj.list.length; i++) {
        var currentDayDiv = document.getElementById(`day-${i}`);
        var weatherString = `<p>Day ${i+1}</p>`;
        weatherString += `<p>Weather: ${sntWeatObj.list[i].weather[0].main}</p>`;
        weatherString += `<p>Daytime Temp: ${sntWeatObj.list[i].temp.day}</p>`;
        weatherString += `<p>Nighttime Temp: ${sntWeatObj.list[i].temp.night}</p>`;
        currentDayDiv.innerHTML = weatherString;
      };
    },

    insertCurrent: function() {
      console.log("One Day");


    },

    insertFiveDay: function() {
      console.log("Five Day");

    },

    insertTenDay: function() {
      console.log("Ten Day");

      
    },

// This builds the holders for the weather output on the DOM
    generalContentDisplay: function(sentParsedWeatherObject) {

      sntWeatObj = sentParsedWeatherObject;
      console.log(sntWeatObj);

      mainWeatherOutputDiv.innerHTML = `<p class=headline>Here's your ${sntWeatObj.cnt} day forecast for ${sntWeatObj.city.name}, ${sntWeatObj.city.country}...</p>`;

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

      if (sntWeatObj.cnt === 1){
        var funcVar = "buildDiv";
      } else if (sntWeatObj.cnt === 5) {
        var funcVar = "buildDiv";
      } else if (sntWeatObj.cnt === 10) {
        var funcVar = "buildDiv";
      };

      ForecastOutput[funcVar]();
      console.log("I came back");
    },

    timeToHuman: function() {
      var theDate = new Date(document.u2h.timeStamp.value * 1000);
      dateString = theDate.toGMTString();
    }
  };

})(ForecastOutput || {});