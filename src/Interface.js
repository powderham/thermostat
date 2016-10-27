$( document ).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();

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
