"use strict";

function printNumbersSetInterval(from, to){
    let current = from;

    setTimeout(function timer () {
        console.log(current);
        if (current < to){
            setTimeout(timer, 1000);
        }
        current++;
    }, 1000);
}

printNumbersSetInterval(5, 10);

