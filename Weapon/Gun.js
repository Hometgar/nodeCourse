"use strict";

const Weapon = require("./Weapon");

const Gun = function(config) {
    Weapon.apply(this, arguments);
    this.bullets = config.bullets;
};

Gun.prototype = new Weapon();
Gun.prototype.constructor = Gun;

Gun.prototype.toString = function() {
    return "Weapon {"+this.name+'' +
        this.height+',' +
        this.width+',' +
        this.weigth+','+
        this.price+',' +
        this.bullets+'}';
};

Gun.prototype.damage = function(){
    let res =(this.width * this.height) ;
    if(res == 0){
        return this.bonus();
    }
    return this.weigth / res + this.bonus();
};

Gun.prototype.bonus = function(){

};

module.exports = Gun;