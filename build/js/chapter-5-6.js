"use strict";
// // chapter 5
// type One = string;
// type Two = string | number;
// type Three = 'hello';
// // convert to more or less specific
// let a: One = 'hello';
// let b = a as Two; //assign less specific type
// let c = a as Three; //more specific
// let d = <One>'world';
// let e = <string | number>'world'; //not used in tsx files
// const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
//     if (c === 'add') return a + b;
//     return '' + a + b;
// }
// let myVal: string = addOrConcat(2, 2, 'concat') as string;
// // ! TS sees no problem but string is returned !
// let nextVal: number = addOrConcat(2, 2, 'concat') as number;
// (10 as unknown) as string //double/forced casting
// //The DOM
// const img = document.querySelector('img')!; //non-null assertion
// const myImg = document.getElementById('myImg') as HTMLImageElement;
// const nextImg = <HTMLImageElement>document.getElementById('myImg');
// img.src
// myImg.src
// // chapter 6
// class Coder {
//     secondLang!: string;
//     constructor(
//         // visibility modifiers
//         public readonly name: string,
//         public music: string,
//         private age: number,
//         protected lang: string = 'Typescript'
//     ) {
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang = lang;
//     }
//     public getAge() {
//         return `Hello, I'm ${this.age}`
//     }
// }
// const Dave = new Coder('Dave', 'Rock', 42);
// console.log(Dave.getAge());
// // console.log(Dave.age);
// // console.log(Dave.lang)
// class WebDev extends Coder {
//     constructor(
//         public computer: string,
//         name: string,
//         music: string,
//         age: number,
//     ) {
//         super(name, music, age);
//         this.computer = computer;
//     }
//     public getLang() {
//         return `I write ${this.lang}`
//     }
// }
// const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
// console.log(Sara.getLang())
// // console.log(Sara.age)
// // console.log(Sara.lang)
// //_____________________________________________________________________________________________
// interface Musician {
//     name: string,
//     instrument: string,
//     play(action: string): string
// }
// class Guitarist implements Musician {
//     name: string;
//     instrument: string;
//     constructor(
//         name: string,
//         instrument: string
//     ) {
//         this.name = name;
//         this.instrument = instrument;
//     }
//     play(action: string) {
//         return `${this.name} ${action} the ${this.instrument}`
//     }
// }
// const Page = new Guitarist('Jimmy', 'guitar');
// console.log(Page.play('strums'));
// // ____________________________________________________________________________
// class Peeps {
//     static count: number = 0;
//     static getCount(): number {
//         return Peeps.count
//     }
//     public id: number;
//     constructor(
//         public name: string
//     ) {
//         this.name = name;
//         this.id = ++Peeps.count;
//     }
// }
// const John = new Peeps('John');
// const Steve = new Peeps('Steve');
// const Amy = new Peeps('Amy');
// console.log(Peeps.count);
// console.log(Steve.id);
// //_________________________________________________________________________________
// class Bands {
//     private dataState: string[];
//     constructor() {
//         this.dataState = []
//     }
//     public get data(): string[] {
//         return this.dataState;
//     }
//     public set data(value: string[]) {
//         if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
//             this.dataState = value;
//             return;
//         } else throw new Error('Param is not an array of strings')
//     }
// }
// const MyBands = new Bands();
// MyBands.data = ['Neil Young', 'Led Zep'];
// console.log(MyBands.data);
// chapter 7
// Index Signatures
// interface TransactionObj {
//     readonly [index: string]: number,
// }
// interface TransactionObj {
//     readonly [index: string]: number,
//     Pizza: number,
//     Books: number,
//     Job: number,
// }
// const todaysTransactions: TransactionObj = {
//     Pizza: -10,
//     Books: -5,
//     Job: 50,
//     Dave: 42,
// }
// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions['Pizza']);
// let prop: string = 'Pizza';
// console.log(todaysTransactions[prop]); // or loop
// // todaysTransactions.Pizza = 60;
// console.log(todaysTransactions['Dave']);
// // ________________________________________________________________
// interface Student {
//     // [key: string]: string | number | number[] | undefined
//     name: string,
//     GPA: number,
//     classes?: number[]
// }
// const student: Student = {
//     name: 'Doug',
//     GPA: 3.5,
//     classes: [100, 200],
// }
// // console.log(student.test)
// for (const key in student) {
//     console.log(`${key}: ${student[key as keyof Student]}`);
// }
// Object.keys(student).map(key => {
//     console.log(student[key as keyof typeof student])
// })
// const logStudentKey = (student: Student, key: keyof Student): void => {
//     console.log(`Student ${key}: ${student[key]}`);
// }
// logStudentKey(student, 'name');
// // ______________________________________________________________________
// // interface Incomes {
// //     [key: string]: number,
// // }
// type Streams = 'salary' | 'bonus' | 'sidehustle';
// type Incomes = Record<Streams, number>;
// const monthlyIncomes: Incomes = {
//     salary: 500,
//     bonus: 100,
//     sidehustle: 250,
// }
// for (const revenue in monthlyIncomes) {
//     console.log(monthlyIncomes[revenue as keyof Incomes])
// }
