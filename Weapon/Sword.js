"use strict"

var Weapon = require('./Weapon');

var Sword = function(config) {
    Weapon.apply(this, arguments);
    this.legendary = false;
    this.year;
};

Sword.prototype = new Weapon();
Sword.prototype.constructor  = Sword;

Sword.prototype.isLegendary = function () {
    return legendary;
};

Sword.prototype.setLegendary = function (legendary) {
    this.legendary = legendary;
};


Sword.prototype.getYear = function () {
    return this.year;
};

Sword.prototype.setYear = function (year ) {
    this.year = year;
};

module.exports = Sword;