"use strict"

alert(`Ответы: document - это объект класса HTMLDocument, 
при этом сам HTMLDocument наследуется от Document, 
а Document наследуется от node, 
проверим:`)


alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node