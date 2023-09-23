// // // chapter 2
// // let myName: string = 'Snezha';
// // let meaningOfLife: number;
// // let isLoading: boolean;
// // let album: any;

// // myName = "Dave";
// // meaningOfLife = 43;
// // isLoading = true;
// // album = 1984;

// // const sum = (a: number, b: string) => {
// //     return a + b;
// // }

// // let postId: string | number;
// // let isActive: boolean | number;

// // let re: RegExp = /\w+/g

// // // chapter 3

// // let stringArr = ['hello', 'world', 'daniia'];
// // let guitars = ['ghost', 'core', 1908]
// // const mixedArr = ['hello', 42, false];

// // stringArr[2] = 'false';
// // guitars = stringArr;
// // guitars.unshift('false');

// // const test = [];
// // const bands: string[] = [];
// // bands.push('post');

// // let myTuple: [string, number, boolean] = ['dave', 42, true];
// // let mix = ['sobd', 40, false];
// // mix = myTuple;
// // myTuple[0] = '89';

// // // objects
// // let obj: object;
// // obj = {};
// // obj = [];

// // const exampleObj = {
// //     name: 'dave',
// //     year: 2000,
// // }
// // exampleObj.name = '2000';

// // type Guitarist = {
// //     name: string,
// //     active?: boolean,
// //     albums: (string | number)[]
// // }

// // let evh: Guitarist = {
// //     name: 'dave',
// //     active: true,
// //     albums: ['Summer night', "mid July", 2013],
// // }

// // let jp: Guitarist = {
// //     name: 'john',
// //     albums: ['Autumn night', "mid August", 2014],
// // }

// // const greetGuitarist = (quitarist: Guitarist) => {
// //     if (quitarist.active) {
// //         return `Hello, ${quitarist.name?.toUpperCase()}`;
// //     }

// //     return quitarist.name;
// // };

// // console.log(greetGuitarist(jp));

// // enum Grade {
// //     U = 1,
// //     D,
// //     C,
// //     B,
// //     A,
// // }

// // console.log(Grade.A);

// // chapter 3
// // type Aliases
// type stringOrNumber = string | number;
// type stringOrNumberArr = (string | number)[];

// type Guitarist = {
//   name?: string,
//   active: boolean,
//   albums: stringOrNumberArr,
// };

// type UserId = stringOrNumber;

// // interface PostId = stringOrNumber; //objects, classes

// // Literal types
// let myName: "Snizhana";
// let userName: "Snizhana" | "Daniia" | "Yuliia";

// myName = "Snizhana";
// userName = "Daniia";

// // functions
// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const logMsg = (message: any): void => {
//   console.log(message);
// };

// let subtract = function (a: number, b: number): number {
//   return a - b;
// };

// type MathFunction = (a: number, b: number) => number;
// // interface MathFunction {(a: number, b: number): number };

// let multiply: MathFunction = function (a, b) {
//   return a * b;
// };

// logMsg(multiply(2, 5));

// // optional params
// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }

//   return a + b;
// };

// // default param value
// const sumAll = (a: number, b: number, c: number = 2): number => {
//   return a + b + c;
// };

// // rest params
// const total = (...nums: number[]): number =>
//   nums.reduce((prev, curr) => prev + curr);

// // never type
// const createError = (errorMsg: string): never => {
//   throw new Error(errorMsg);
// };

// const infinite = (): void => {
//   let i: number = 1;
//   while (true) {
//     i += 1;
//     if (i > 100) break;
//   }
// };

// // custom type guard
// const isNumber = (value: any): boolean => {
//   return typeof value === "number";
// };

// // use of the never type
// const numberOrString = (value: number | string): string => {
//   if (isNumber(value)) return "number";
//   if (typeof value === "string") return "string";

//   return createError("This should never happen!");
// };
