"use strict";

console.log(`
    Ответ:
    true - свойство самого объекта;
    null - свойство прототипа, после удаления свойства у объекта;
    undefined - больше нет такого свойства
    Проверим:
`);

let animal = {
      jumps: null
    };

let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

console.log( rabbit.jumps ); // ? (2)

delete animal.jumps;

console.log( rabbit.jumps ); // ? (3)
