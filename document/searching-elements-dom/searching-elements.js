"use strict";

let table = document.querySelector('#age-table');
let label = document.querySelectorAll("#age-table label");
let firstTd = table.rows[0].cells[0];
let form = document.querySelector('form[name="search"]');
let formFirstInput = form.querySelector('input');
let formLastInput = form.querySelector('input[type="submit"]');

