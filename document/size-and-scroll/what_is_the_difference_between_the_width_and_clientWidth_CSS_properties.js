"use strict"

console.log(`
    1. clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце,.
    или например "auto"
    2. clientWidth = ширина внутренней области элемента + внутренние отступы padding, 
    CSS ширина padding не включает (при стандартном значении box-sizing)
    3. clientWidth всегда размер за вычетом прокрутки, 
    а СSS-ширина в зависимости от браузера - где-то вычитается, где-то нет
`);