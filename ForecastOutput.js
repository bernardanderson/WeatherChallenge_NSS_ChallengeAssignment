var ForecastOutput = (function() {

  var mainWeatherOutputDiv = document.getElementById("main-weather-output");
  var sntWeatObj; // Shortened sentWeatherObject accessable by all functions

  return {

    addWeatherToDivs: function() {
      for (var i = 0; i < sntWeatObj.list.length; i++) {
        var currentDayDiv = document.getElementById(`day-${i}`);
        var weatherString = `<p class="day">${ForecastOutput.timeToHuman(i)}</p>`;
        weatherString += `<p class="description">Weather: ${sntWeatObj.list[i].weather[0].description}</p>`;
        
        var dayTemp = ForecastOutput.tempToFahrenheit(sntWeatObj.list[i].temp.day);
        var nightTemp = ForecastOutput.tempToFahrenheit(sntWeatObj.list[i].temp.night);
        weatherString += `<p class="temps">Hi:${dayTemp} / Low:${nightTemp}&degF</p>`;
        currentDayDiv.innerHTML = weatherString;
      };
    },

// This builds the holders for the weather output on the DOM
    generalContentDisplay: function(sentParsedWeatherObject) {

      sntWeatObj = sentParsedWeatherObject;
      console.log(sntWeatObj);

      mainWeatherOutputDiv.innerHTML = `<p class=headline>Here's your ${sntWeatObj.cnt} day forecast for ${sntWeatObj.city.name}, ${sntWeatObj.city.country}...</p>`;

      var dayBoxHolder = document.createElement("div");
      dayBoxHolder.id = "day-box-holder";
      dayBoxHolder.classList.add("day-box-holder");
      mainWeatherOutputDiv.appendChild(dayBoxHolder);

      for (var i = 0; i < sntWeatObj.list.length; i++) {
        var dayDiv = document.createElement("div");
        dayDiv.id = "day-" + i;
        dayDiv.classList.add("day-div");
        dayBoxHolder.appendChild(dayDiv);
      }

      ForecastOutput.addWeatherToDivs();
    },

// This converts the UNIX time into human readable time
    timeToHuman: function(sentCurrentDay) {
      var humanDate = new Date(sntWeatObj.list[sentCurrentDay].dt * 1000);
      var dateArray = humanDate.toGMTString().split(" ");
      var monthDay = `${dateArray[0].substring(0, 3)}, ${dateArray[2]} ${dateArray[1]}`;
      return monthDay;
    },

    tempToFahrenheit: function(sentKelvinTemp) {
      var fahrenheitTemp = Math.round((sentKelvinTemp - 273.15) * 1.8 + 32);
      return fahrenheitTemp;
    }

  };

})(ForecastOutput || {});