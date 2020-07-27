// function Array() {
//   // this = { __proto__: Array.prototype }
//   // ...
//   // return this
// }

// const arr = [1, 2, 3, 4, 5];

// Array.prototype.map = function(fn) {
//   return "Hello";
// }

// console.log(arr.map((x) => x ** 3));

// let a = {};

// const now = new Date()

function Array() {
  // ... 1 ...
}

Array.prototype.map = function (fn) {
  // ... 2 ...
};

Array.prototype.reduce = function (fn) {
  // ... 3 ...
};

class Array {
  constructor() {
    // ... 1 ...
  }

  map(fn) {
    // ... 2 ...
  }

  reduce(fn) {
    // ... 3 ...
  }
}
