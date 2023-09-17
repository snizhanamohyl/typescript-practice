// chapter 2
let myName: string = 'Snezha';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "Dave";
meaningOfLife = 43;
isLoading = true;
album = 1984;

const sum = (a: number, b: string) => {
    return a + b;
}
    
let postId: string | number;
let isActive: boolean | number;

let re: RegExp = /\w+/g

// chapter 3

let stringArr = ['hello', 'world', 'daniia'];
let guitars = ['ghost', 'core', 1908]
const mixedArr = ['hello', 42, false];

stringArr[2] = 'false';
guitars = stringArr;
guitars.unshift('false');

const test = [];
const bands: string[] = [];
bands.push('post');

let myTuple: [string, number, boolean] = ['dave', 42, true]; 
let mix = ['sobd', 40, false];
mix = myTuple;
myTuple[0] = '89';

// objects
let obj: object;
obj = {};
obj = [];

const exampleObj = {
    name: 'dave',
    year: 2000,
}
exampleObj.name = '2000';

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'dave',
    active: true,
    albums: ['Summer night', "mid July", 2013],
}

let jp: Guitarist = {
    name: 'john',
    albums: ['Autumn night', "mid August", 2014],
}

const greetGuitarist = (quitarist: Guitarist) => {
    if (quitarist.active) {
        return `Hello, ${quitarist.name?.toUpperCase()}`;
    }

    return quitarist.name;
};

console.log(greetGuitarist(jp));

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.A);

