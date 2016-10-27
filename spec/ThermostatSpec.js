'use strict';

describe('Thermostat', function () {
    var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function () {
    expect(thermostat.temperature).toEqual(20)
  });

  it('has a default minimum temperature of 10 degrees', function () {
    expect(thermostat.MINIMUMTEMP).toEqual(10)
  });

  it('starts with powersaving mode on', function () {
    expect(thermostat.powersaver).toBe(true)
  });

  it('has a default maximum temperature of 25 degrees', function () {
    expect(thermostat.maximumtemp).toEqual(25)
  });

  it('can be turned up', function () {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21)
  });

  it('can be turned down', function () {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19)
  });

  it('has a minimum temperature of 10', function () {
    for (var i = 1; i < 11; i++){
      thermostat.down();
    }
    expect(thermostat.down()).toEqual('Minimum temperature is 10 degrees')
  });

  it('sets the powersaving mode to off', function () {
    thermostat.setPowersaver();
    expect(thermostat.powersaver).toBe(false)
  });

  it('sets the powersaving mode to on', function () {
    thermostat.setPowersaver();
    thermostat.setPowersaver();
    expect(thermostat.powersaver).toBe(true)
  });

  it('changes the default maximum temperature to 32', function () {
    thermostat.setPowersaver();
    expect(thermostat.maximumtemp).toEqual(32)
  });

  it('has a maximum temperature of 25 in powersaver mode', function () {
    for (var i = 1; i < 6; i ++){
      thermostat.up();
    }
    expect(thermostat.up()).toEqual('Stop it, you\'re ruining the planet!');
  });

  it('has a maximum temperature of 32 degrees', function () {
    thermostat.setPowersaver(false);
    for (var i = 1; i < 13; i++){
      thermostat.up();
    }
    expect(thermostat.up()).toEqual('Stop it, you\'re ruining the planet!');
  });

  it('resets the temperature to 20', function () {
    thermostat.up(2);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('returns low-usage when temperature is below 18', function () {
    for (var i = 1; i < 4; i++){
      thermostat.down();
    }
    expect(thermostat.usage()).toEqual('Low-usage');
  });

  it('returns medium-usage when temperature is between 18 and 24', function () {
    expect(thermostat.usage()).toEqual('Medium-usage');
  });

  it('returns high-usage when temperature is higher than 24', function () {
    for (var i = 1; i < 6; i ++) {
          thermostat.up();
    }
    expect(thermostat.usage()).toEqual('High-usage');
  });

});
