"use strict"

console.log(`
    Ответ: 
    Объект будет работать,
    объект создан, после присваивания переменной объекта,
    у ней появляется собственное лексическое окружение,
    и при вызове методов объекта,
    мы каждый раз имеем дело с одним и тем же лексическим окружением.
    Проверим:
`)
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

console.log( counter.up() ); // ?
console.log( counter.up() ); // ?
console.log( counter.down() ); // ?