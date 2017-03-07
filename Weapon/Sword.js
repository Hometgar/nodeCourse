"use strict"

const Weapon = require('./Weapon');

const Sword = function(config) {
    Weapon.apply(this, arguments);
    this.legendary = false;
    this.year = config.year;
};

Sword.prototype = new Weapon();
Sword.prototype.constructor  = Sword;

Sword.prototype.isLegendary = function () {
    return false;
};

Sword.prototype.duration = function(){
    if(this.price == 0){
        return 0
    }
    return (this.weigth * this.year) / this.price;
};

Sword.prototype.damage = function(){
    if(this.year == 0){
        return 0;
    }
    let res = this.width * this.weigth * this.height;
    res += this.bonus();
    res /= this.year;
    if(this.isLegendary() || this.year < 10){
        res*=0.9;
    }
    return res;
};

Sword.prototype.bonus = function () {
    if(this.isLegendary() || this.year == 0){
        return 0;
    }
    return this.weight / this.year;
};

module.exports = Sword;