"use strict"

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
    stomach: [],
};

let lazy = {
  __proto__: hamster,
    stomach: [],
};

// Этот хомяк нашёл еду
speedy.eat("apple");
speedy.eat("manzana");

console.log(`
    Более подходящим решением 
    является создание свойства stomach у каждого "наследника",
    тогда мы без проблем сможем добавить туда любое количество еды.
    Проверим:
`)
console.log('speedy.stomach = ', speedy.stomach );

console.log( 'lazy.stomach = ', lazy.stomach );