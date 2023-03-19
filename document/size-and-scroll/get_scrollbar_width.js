"use strict";

let div = document.createElement('div');

div.style.cssText = 'overflow-y: scroll; width: 50px; height: 50px';

document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);