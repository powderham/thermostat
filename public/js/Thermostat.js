'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.POWERSAVER_MAX = 25
  this.POWERSAVER_OFF_MAX = 32
  this.temperature = this.DEFAULT_TEMP;
  this.MINIMUMTEMP = 10;
  this.powersaver = true;
  this.maximumtemp = this.POWERSAVER_MAX;
  this.LOW_USAGE = 18;
  this.HIGH_USAGE = 24;
};

Thermostat.prototype.up = function () {
  if (this._isAtMaximum() === true) {
    return ('Stop it, you\'re ruining the planet!');
  }
  this.temperature++;
}

Thermostat.prototype.down = function () {
  if (this._isAtMinimum() === true) {
    return 'Minimum temperature is 10 degrees';
  } else {
  this.temperature--;
  }
}

Thermostat.prototype.setPowersaver = function () {
  if (this.powersaver === true) {
    this.powersaver = false;
  } else {
    this.powersaver = true;
  }
  this._changeMaxTemp();
}

Thermostat.prototype._changeMaxTemp = function () {
  if (this.powersaver === true) {
    this.maximumtemp = this.POWERSAVER_MAX;
  } else {
    this.maximumtemp = this.POWERSAVER_OFF_MAX;
  }
}

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.usage = function () {
  if (this.temperature < this.LOW_USAGE) {
    return 'Low-usage';
  } else if (this.temperature < this.HIGH_USAGE) {
    return 'Medium-usage';
  } else {
    return 'High-usage';
  }
}

Thermostat.prototype._isAtMaximum = function () {
    return (this.temperature >= this.maximumtemp);
}

Thermostat.prototype._isAtMinimum = function () {
  return (this.temperature <= this.MINIMUMTEMP);
}
