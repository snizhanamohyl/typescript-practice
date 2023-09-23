type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two; //assign less specific type
let c = a as Three; //more specific

let d = <One>'world';
let e = <string | number>'world'; //not used in tsx files


const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b; 
}

let myVal: string = addOrConcat(2, 2, 'concat') as string;

// ! TS sees no problem but string is returned !
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

(10 as unknown) as string //double/forced casting

//The DOM
const img = document.querySelector('img')!; //non-null assertion
const myImg = document.getElementById('myImg') as HTMLImageElement; 
const nextImg = <HTMLImageElement>document.getElementById('myImg'); 

img.src
myImg.src