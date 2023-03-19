"use strict"

let ul = document.createElement('ul');
document.body.append(ul);

while (true){
    let li = document.createElement('li');

    let liText = prompt('введите текст, html будет преобразован в текст', '');

    if (!liText) break;

    li.textContent = liText;

    ul.append(li);
}

