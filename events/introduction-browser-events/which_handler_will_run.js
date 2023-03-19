"use strict";

console.log(`
    1, затем 2.
    Первое значение получено из button.addEventListener("click", () => alert("1"));
    2 вызовется в button.onclick = () => alert(2);
    При этом при втором вызове 
    button.removeEventListener("click", () => alert("1"));
    ничего не произойдет, так как мы удалили событие, 
    однако последующий button.onclick сработает в любом случае
`)
