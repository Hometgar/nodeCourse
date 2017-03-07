"use strict";

const Weapon = require("./Weapon");

const Gun = function(config) {
    Weapon.apply(this, arguments);
    this.bullets = config.bullets;
};

Gun.prototype = new Weapon();
Gun.prototype.constructor = Gun;

Gun.prototype.toString = function() {
    let res = Weapon.prototype.toString.apply(this, arguments);
    return res + " bullets= " + this.bullets;
}

module.exports = Gun;