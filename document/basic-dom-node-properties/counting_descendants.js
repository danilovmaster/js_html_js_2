"use strict"

for (let li of document.querySelectorAll('li')) {

    let title = li.firstChild.data;

    title = title.trim();

    let count = li.getElementsByTagName('li').length == 0 ?
          1 : li.getElementsByTagName('li').length;

    alert(title + ': ' + count);
}