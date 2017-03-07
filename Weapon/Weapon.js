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
    return "Weapon {"+this.name+'}';

};

Weapon.prototype.getName = function() {
    return this.name;
};
Weapon.prototype.setName = function(name) {
    this.name = name;
}

Weapon.prototype.getHeight = function() {
    return this.height;
}
Weapon.prototype.setHeight = function(height) {
    this.height = name;
}

Weapon.prototype.getWidth = function() {
    return this.width;
}
Weapon.prototype.setWidth = function(width) {
    this.width = width;
}

Weapon.prototype.getWeight = function() {
    return this.weigth;
}
Weapon.prototype.setWeight = function(weigth) {
    this.weigth = weigth;
}

Weapon.prototype.getPrice = function() {
    return this.price;
}
Weapon.prototype.setPrice = function(price) {
    this.price = price;
}

Weapon.prototype.damage = function() {
    return this.damage;
};

Weapon.prototype.setDamage = function(damage) {
    return this.damage = damage;
};

Weapon.prototype.bonus = function() {
    return this.bonus;
};

module.exports = Weapon;