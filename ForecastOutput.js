var ForecastOutput = (function() {

  var mainWeatherOutputDiv = document.getElementById("main-weather-output");
  var sntWeatObj; // Shortened sentWeatherObject accessable by all functions

  return {

    addColorToDayDiv: function(sentSkyCondition) {
      var skyType = ["Snow", "Rain", "Clouds"]

      for (var i = 0; i < skyType.length; i++) {
        if (sentSkyCondition === skyType[i]){
          return "sky-color-gray";
        };
      };
      return "sky-color-blue"
    },

    addImageToDiv: function(sentSkyCondition) {
      var skyType = ["Snow", "Rain", "Clouds"]
      for (var i = 0; i < skyType.length; i++) {
        if (sentSkyCondition === skyType[i]){
          return skyType[i];
        };
      };
      return "Clear";
    },


    addWeatherToDivs: function() {
      for (var i = 0; i < sntWeatObj.list.length; i++) {
        var currentDayDiv = document.getElementById(`day-${i}`);
        var weatherString = `<p class="day">${ForecastOutput.timeToHuman(i)}</p>`;
        
        weatherString += `<p class="description">Weather: ${ForecastOutput.formatSkyConditions(sntWeatObj.list[i].weather[0].description)}</p>`;
        
        var dayTemp = ForecastOutput.tempToFahrenheit(sntWeatObj.list[i].temp.day);
        var nightTemp = ForecastOutput.tempToFahrenheit(sntWeatObj.list[i].temp.night);
        weatherString += `<p class="temps">Hi: ${dayTemp} / Low: ${nightTemp}&degF</p>`;
        
        var weatherImg = document.createElement("img");
        weatherImg.setAttribute("src", `img/${ForecastOutput.addImageToDiv(sntWeatObj.list[i].weather[0].main)}.png`);
        currentDayDiv.appendChild(weatherImg);

        currentDayDiv.innerHTML += weatherString;

        currentDayDiv.classList.add(ForecastOutput.addColorToDayDiv(sntWeatObj.list[i].weather[0].main));
      };
    },

// This capitalizes the first letter in the detailed conditions report
    formatSkyConditions: function(sentDetailedSkyCondition) {
      var capitalizedSkyConditions = sentDetailedSkyCondition.split(" ").map(function(arrayItem) {
        return (arrayItem.charAt(0).toUpperCase() + arrayItem.substring(1));
      }).join(" ");
      return capitalizedSkyConditions;
    },


// This builds the holders for the weather output on the DOM
    generalContentDisplay: function(sentParsedWeatherObject) {

      sntWeatObj = sentParsedWeatherObject;

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

// This converts the openweather temp (in K) to fahrenheit (F)
    tempToFahrenheit: function(sentKelvinTemp) {
      var fahrenheitTemp = Math.round((sentKelvinTemp - 273.15) * 1.8 + 32);
      return fahrenheitTemp;
    },

// This converts the UNIX time into human readable time
    timeToHuman: function(sentCurrentDay) {
      var humanDate = new Date(sntWeatObj.list[sentCurrentDay].dt * 1000);
      var dateArray = humanDate.toGMTString().split(" ");

// This object is used to convert the three char day into the full name
      var dayAbbrObject = 
        { 
          "Mon": "Monday",
          "Tue": "Tuesday",
          "Wed": "Wednesday",
          "Thu": "Thursday",
          "Fri": "Friday",
          "Sat": "Saturday",
          "Sun": "Sunday"
        };

      var tempDateAbriv = dateArray[0].substring(0, 3);
      for (day in dayAbbrObject) {
        if (day === tempDateAbriv) {
          dateArray[0] = dayAbbrObject[day];
        };
      };

      var monthDay = `${dateArray[0]}, ${dateArray[2]} ${dateArray[1]}`;

      return monthDay;
    }
  };

})(ForecastOutput || {});