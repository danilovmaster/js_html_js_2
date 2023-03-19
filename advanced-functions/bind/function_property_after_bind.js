"use strict";

console.log(`
    В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
    
    function sayHi() {
      alert( this.name );
    }
    sayHi.test = 5;
    
    let bound = sayHi.bind({
      name: "Вася"
    });
    
    alert( bound.test ); // что выведет? почему?
`);
console.log(`
    Ответ: undefined.
    Результатом работы bind является другой объект. У него уже нет свойства test.
    Проверим: 
`);
function sayHi() {
  console.log('sayHi', this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log('bound.test = ', bound.test );
