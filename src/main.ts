const stringEcho = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
}

console.log(isObj(['a', 90]));
console.log(isObj({ a: 90 }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }

    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg, is: false}
    }

    return {arg, is: !!arg}
}

console.log(isTrue([]))
console.log(isTrue([1, 5, 6]))
console.log(isTrue({}))
console.log(isTrue({ name: 'snezha' }))

interface BoolCheck<T> {
    value: T,
    is: boolean
}
    
const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return {value: arg, is: false}
    }

    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value: arg, is: false}
    }

    return {value: arg, is: !!arg}
}

interface HasId {
    id: number,
}

const processUser = <T extends HasId>(user: T): T => {
    // process the user
    return user;
}

console.log(processUser({ id: 4, name: 'John' }));


const getUsersProp = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key]);
}

const usersArr = [
    {
        id: 1,
        name: 'john',
        email: 'john@mail.com'
    },
    {
        id: 2,
        name: 'amy',
        email: 'amy@mail.com'
    }
]
console.log(getUsersProp(usersArr, 'email'));

class StateObj<T> {
    private data: T;

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObj('John');
console.log(store.state)
// store.state = 12

const myState = new StateObj<(string | number | boolean)[]>([15]);
myState.state = ['dave', 42, true];
