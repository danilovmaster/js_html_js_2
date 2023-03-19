"use strict";

console.log(`
    Правда, что elem.lastChild.nextSibling всегда равен null?
    Да, у него в любом случае нет nextSibling.
     
    Правда, что elem.children[0].previousSibling всегда равен null ?
    Нет, elem.children[0] – потомок-элемент, 
    и у него соседом "спереди" может быть текстовый узел
`)