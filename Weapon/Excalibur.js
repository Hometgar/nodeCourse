"use strict"

var Sword = require('./Sword');


var Excalibur = function(config) {
    Sword.apply(this, arguments);
};

Excalibur.prototype = new Sword();
Excalibur.prototype.constructor  = Excalibur;

Excalibur.prototype.bonus = function(){
    return (this.width/this.year)*1.3;
};

module.exports = Sword;

