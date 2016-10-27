// <h2 id="temperature">20</h2>
// <button type="button" id="power-saver">Power Saver</button>
// </body>

$( document ).ready(function () {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#up').click(function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
    if (thermostat.usage() === 'High-usage')
     {
      $('#temperature').css('color', 'red');
    }
    if (thermostat.usage() === 'Medium-usage')
     {
      $('#temperature').css('color', 'black');
    }
    });

  $('#down').click(function () {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
    if (thermostat.usage() === 'Low-usage')
     {
      $('#temperature').css('color', 'green');
    }
    if (thermostat.usage() === 'Medium-usage')
     {
      $('#temperature').css('color', 'black');
    }
  });

  $('#power-saver').click(function(){
    thermostat.setPowersaver();

  });

  $('#reset').click(function () {
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });


});
