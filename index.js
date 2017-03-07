var Weapon = require('./Weapon/Weapon');
var Gun = require('./Weapon/Gun');

var sword = new Gun({name:"name", height:"height", width:"width", weight:"weight", price:"price", bullets: 13});

console.log('res →'+sword);