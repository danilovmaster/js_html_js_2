"use strict"

console.log(`
    function makeCounter() {
      let count = 0;
    
      return function() {
        return count++;
      };
    }
    
    let counter = makeCounter();
    let counter2 = makeCounter();
    
    console.log( counter() ); // 0
    console.log( counter() ); // 1
    
    console.log( counter2() ); // ?
    console.log( counter2() ); // ?
    
    Ответ: 2 разные переменные создают 2 разных лексических окружения,
    у каждого свой count
`);
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // ?
console.log( counter2() ); // ?