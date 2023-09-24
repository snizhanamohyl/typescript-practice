"use strict";
const stringEcho = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(['a', 90]));
console.log(isObj({ a: 90 }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue([]));
console.log(isTrue([1, 5, 6]));
console.log(isTrue({}));
console.log(isTrue({ name: 'snezha' }));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user
    return user;
};
console.log(processUser({ id: 4, name: 'John' }));
const getUsersProp = (users, key) => {
    return users.map(user => user[key]);
};
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
];
console.log(getUsersProp(usersArr, 'email'));
class StateObj {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObj('John');
console.log(store.state);
// store.state = 12
const myState = new StateObj([15]);
myState.state = ['dave', 42, true];
