"use strict"

let factorial = (n) => n == 1 ? 1 : n * factorial( n -1 );

let array = [1, 3, 5, 10, 100,]

for (let a of array){
    console.log(factorial(a));
}