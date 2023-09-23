"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; //assign less specific type
let c = a; //more specific
let d = 'world';
let e = 'world'; //not used in tsx files
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// ! TS sees no problem but string is returned !
let nextVal = addOrConcat(2, 2, 'concat');
10; //double/forced casting
//The DOM
const img = document.querySelector('img'); //non-null assertion
const myImg = document.getElementById('myImg');
const nextImg = document.getElementById('myImg');
img.src;
myImg.src;
