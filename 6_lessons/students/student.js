'use strict';

function Student(fullname) {
  [this._firstName, this._secondName, this._surName] = fullname.split(' ', 3);

  this._firstName = this._firstName.trim();
  this._secondName = this._secondName.trim();
  this._surName = this._surName.trim();

  this._healthy = true;
  this.isHealthy = function () {
    return this._healthy;
  };

  this.pain = function () {
    this._healthy = false;

  };
  this.fullName = function () {
    return this._firstName + ' ' + this._secondName + ' ' + this._surName;

  };
  this.shortName = function () {
    return this._firstName + ' ' + this._secondName.charAt(0).toUpperCase() + '. ' + this._surName.charAt(0).toUpperCase() + '.';

  };
};