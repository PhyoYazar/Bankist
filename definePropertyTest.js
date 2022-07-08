'use strict';

const obj = { name: 'Phyo' };
Object.defineProperty(obj, 'name', {
  configurable: false,
  enumerable: false,
  writable: false,
});
// delete obj['name']; configurable
// obj.name = 20;  writable
// console.log(Object.keys(obj));  enumerable
// console.log(obj);

function Test(name) {
  this.name = name;
  let privateData = { x: 1, y: 0 };

  this.outputName = function () {
    console.log(`My name is ${name}`);
  };

  Object.defineProperty(this, 'privateData', {
    get: function () {
      return privateData;
    },
    set: function (value) {
      if (!value) throw new Error('This is error!');

      this.privateData['x'] += value;
    },
  });
}
const jonas = new Test('Jonas');
const mary = new Test('Mary');
// jonas.outputName();
// mary.outputName();
// console.log(mary.privateData);

// const maryPri = mary.privateData;
// console.log(maryPri);

mary.privateData = 5;
console.log(mary);

// iterables vs enumerable

const arr = [1, 2, 3, 4, 5, 6];
arr.newIndex = 'value';

let a = [];
for (const i in arr) {
  a.push(i);
}
console.log(a);

console.log('........................');
let b = [];
for (const i of arr) {
  b.push(i);
}
console.log(b);
console.log(arr);
