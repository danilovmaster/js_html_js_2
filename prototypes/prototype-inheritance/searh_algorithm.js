"use strict"

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log( pockets.pen ); // 3
console.log( bed.glasses ); // 1
console.log( table.money ); // undefined

console.log(`
    Ответ на вопрос:
    С точки зрения производительности, для современных движков неважно, 
    откуда берётся свойство – из объекта или из прототипа. 
    Они запоминают, где было найдено свойство, и повторно используют его в следующем запросе.
`);
