"use strict"

function User(name){
    this.name = name;
}

let user = new User('Вася');

let user1 = new user.constructor('Петя');

console.log(user.name, user1.name);

console.log(`
    Выше используется синтаксис constructor,
    при этом в сам constructor никаких изменений не вносилось.
    Посмотрим, что будет, если переписать .prototype объекта:
 `)
function User1(name){
    this.name = name;
}
User1.prototype = {};

let user2 = new User1('Мотя');

let user3 = new user2.constructor('Ваня');

console.log(user2.name, user3.name);