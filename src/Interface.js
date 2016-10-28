$( document ).ready(function () {
  var thermostat = new Thermostat();
console.log('hello');
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=121a9ab6b7bae94bcb61113c310c6e21', function (data){
  $(".result").text(data.weather[0].description);
  $(".temp").text(Math.round((data.main.temp-273.15)*10)/10);
  console.log(data);
  // // for (x in data.weather) {
  // //   console.log(x);
  // }
});

  updateTemperature();
  
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

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }
});
