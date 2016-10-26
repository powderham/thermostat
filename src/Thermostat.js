function Thermostat() {
  this.temperature = 20;
  this.MINIMUMTEMP = 10;
  this.powersaver = true;
  this.maximumtemp = 25;
};

Thermostat.prototype.up = function (number) {
  if ((this.temperature + number) > this.maximumtemp) {
    return('Stop it, you\'re ruining the planet!');
  }
  return (this.temperature += number);
}

Thermostat.prototype.down = function (number) {
  if ((this.temperature - number) < this.MINIMUMTEMP ) {
    return 'Minimum temperature is 10 degrees';
  } else {
  return (this.temperature -= number);
}
}

Thermostat.prototype.setPowersaver = function (state) {
  this.powersaver = state;
  this._changeMaxTemp();
}

Thermostat.prototype._changeMaxTemp = function () {
  if (this.powersaver === true) {
    this.maximumtemp = 25;
  } else {
    this.maximumtemp = 32;
  }
}

Thermostat.prototype.reset = function () {
  this.temperature = 20;
}

Thermostat.prototype.usage = function () {
  if (this.temperature < 18) {
    return 'Low-usage';
  }else if (this.temperature > 24) {
    return 'High-usage';
  }else{
    return 'Medium-usage';
  }
}
