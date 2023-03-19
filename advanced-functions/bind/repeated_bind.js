"use strict";

console.log(`
    Можем ли мы изменить this дополнительным связыванием?    
    Что выведет этот код?
    
    function f() {
      alert(this.name);
    }
    
    f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
    
    f();
`)
console.log(`
    Код выведет Вася
    Экзотический объект bound function, возвращаемый при первом вызове f.bind(...), 
    запоминает контекст (и аргументы, если они были переданы) только во время создания.

    Следующий вызов bind будет устанавливать контекст уже для этого объекта. Это ни на что не повлияет.
    Можно сделать новую привязку, но нельзя изменить существующую.
    Проверим:
`);

function f() {
  console.log(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();