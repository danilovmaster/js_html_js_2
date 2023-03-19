"use strict";

console.log(`
    Результат - ошибка, 
    так как функция объявлена внутри if,
    то есть снаружи она не может быть вызвана.
    Проверим:
`);

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();