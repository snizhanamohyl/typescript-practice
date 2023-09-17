"use strict";
// chapter 2
let myName = 'Snezha';
let meaningOfLife;
let isLoading;
let album;
myName = "Dave";
meaningOfLife = 43;
isLoading = true;
album = 1984;
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive;
let re = /\w+/g;
// chapter 3
let stringArr = ['hello', 'world', 'daniia'];
let guitars = ['ghost', 'core', 1908];
const mixedArr = ['hello', 42, false];
stringArr[2] = 'false';
guitars = stringArr;
guitars.unshift('false');
const test = [];
const bands = [];
bands.push('post');
let myTuple = ['dave', 42, true];
let mix = ['sobd', 40, false];
mix = myTuple;
myTuple[0] = '89';
// objects
let obj;
obj = {};
obj = [];
const exampleObj = {
    name: 'dave',
    year: 2000,
};
exampleObj.name = '2000';
let evh = {
    name: 'dave',
    active: true,
    albums: ['Summer night', "mid July", 2013],
};
let jp = {
    name: 'john',
    albums: ['Autumn night', "mid August", 2014],
};
const greetGuitarist = (quitarist) => {
    var _a;
    if (quitarist.active) {
        return `Hello, ${(_a = quitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return quitarist.name;
};
console.log(greetGuitarist(jp));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
