"use strict"

var Weapon = function(config) {
    config = config || {};
    this.name = config.name;
    this.height = config.height;
    this.width = config.width;
    this.weigth = config.weight;
    this.price = config.price;
};

Weapon.prototype.toString = function(){
    return "Weapon {"+this.name+'' +
        this.height+',' +
        this.width+',' +
        this.weigth+','+
        this.price+',}';
};
module.exports = Weapon;