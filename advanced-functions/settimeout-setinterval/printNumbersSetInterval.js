"use  strict";

function printNumbersSetInterval(from, to){
    let current = from;

    let timer = setInterval(function () {
        console.log(current);
        if (current == to){
            clearInterval(timer);
        }
        current++;
    }, 1000);
}

printNumbersSetInterval(5, 10);
