"use strict"

const n = 100;

function sumTo(number) {
    let sum = 0;
    for (let i= 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(n));

function sumToRecursion(number){
    if (number === 1) return 1;

    return number + sumToRecursion(number - 1);
}

console.log(sumToRecursion(n));

let sumToRecursionArrow = (number) => number === 1 ?
    1 : number + sumToRecursionArrow(number - 1);

console.log(sumToRecursionArrow(n));

let sumToArifProgression = (number) => ((1 + number) / 2 ) * number;

console.log(sumToArifProgression(n));