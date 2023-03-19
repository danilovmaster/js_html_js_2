"use strict";

console.log(`
    Только первый вызов содержит в this rabbit,
    все остальные обращаются к Rabbit.prototype,
    а у него нет свойства sayHi, 
    потому сначала будет Rabbit,
    а затем три раза undefined.
    
    Проверим:
`);

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log( this.name );
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();