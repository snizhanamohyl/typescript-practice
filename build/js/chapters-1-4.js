"use strict";
// // chapter 2
// let myName: string = 'Snezha';
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: any;
// interface PostId = stringOrNumber; //objects, classes
// Literal types
let myName;
let userName;
myName = "Snizhana";
userName = "Daniia";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
let subtract = function (a, b) {
    return a - b;
};
// interface MathFunction {(a: number, b: number): number };
let multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(2, 5));
// optional params
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
// rest params
const total = (...nums) => nums.reduce((prev, curr) => prev + curr);
// never type
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i += 1;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number";
};
// use of the never type
const numberOrString = (value) => {
    if (isNumber(value))
        return "number";
    if (typeof value === "string")
        return "string";
    return createError("This should never happen!");
};
