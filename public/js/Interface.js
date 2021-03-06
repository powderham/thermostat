String.prototype.capitaliseFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.capitaliseEachWord = function() {
    var newArray = []
    var array = this.split(" ");
    for(var i=0; i<array.length;i++){
      newArray.push(array[i].capitaliseFirstLetter());
    };
    return newArray.join(" ");
};


$( document ).ready(function () {
  var thermostat = new Thermostat();
  var city = 'London'

  var updateWeather = function () {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=121a9ab6b7bae94bcb61113c310c6e21', function (data){
      $(".temp").text(Math.round((data.main.temp-273.15)*10)/10);
      $(".weather-description").text(data.weather[0].description.capitaliseFirstLetter());
      $(".city").text(city.capitaliseEachWord());
    });
  };

    $.get  ('http://localhost:4567/testcity.json', function (data){
    city = data.cityName
  });




  $(".city").text(city);

  updateTemperature();
  updateWeather();

  $('.toggle').toggles({
    drag: true, // allow dragging the toggle between positions
    click: true, // allow clicking on the toggle
    text: {
      on: 'ON', // text for the ON position
      off: 'OFF' // and off
    },
    on: true, // is the toggle ON on init
    animate: 250, // animation time (ms)
    easing: 'swing', // animation transition easing function
    checkbox: null, // the checkbox to toggle (for use in forms)
    clicker: null, // element that can be clicked on to toggle. removes binding from the toggle itself (use nesting)
    width: 50, // width used if not set in css
    height: 20, // height if not set in css
    type: 'compact' // if this is set to 'select' then the select style toggle will be used
  });

  $('#up').click(function() {
    thermostat.up();
    updateTemperature();
    });

  $('#down').click(function () {
    thermostat.down();
    updateTemperature();
  });

  $('#power-saver').click(function(){
    thermostat.setPowersaver();
  });

  $('#reset').click(function () {
    thermostat.reset();
    updateTemperature();
  });

  $('#citySelector').click(function () {
    city = $('#selectedCity').val();
    $('#selectedCity').val("");
    updateWeather();
  });


  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }
});
