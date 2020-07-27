// const axios = require("axios");

// function printResult(response) {
//   console.log(response.data);
// }

// const p = axios("https://pokeapi.co/api/v2/pokemon?offset=0&limit=12");
// p.then(printResult);
// console.log("Hello!");
// // ...

// // p ← состояние pending (ожидание)
// // p ← fulfilled (осуществлен)

// function sum(a, b) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 1000);
//   });
// }

// function multiply(a, b, cb) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(a * b);
//     }, 1000);
//   });
// }

// sum(5, 8)
//   .then((data) => multiply(data, 2))
//   .then((data2) => sum(data2, 20))
//   .then((data3) => console.log(data3));

// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve(1), Math.random() * 2000 + 500)
// );

// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve(2), Math.random() * 2000 + 500)
// );

// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve(3), Math.random() * 2000 + 500)
// );

// p1.then(console.log);
// p2.then(console.log);

// const all = (promises) => {
//   return new Promise((resolve) => {
//     let arr = [];
//     let count = 0;
//     for (let i = 0; i < promises.length; i++) {
//       promises[i].then((data) => {
//         arr[i] = data;
//         count++;
//         if (count === promises.length) resolve(arr);
//       });
//     }
//   });
// };

// const allP = all([p1, p2, p3]);

// allP.then(console.log); // [1, 2, 3]

// sum(5, 8, (data) => {
//   multiply(data, 2, (data2) => {
//     sum(data2, 10, (data3) => {
//       console.log(data3);
//     });
//   });
// });

// console.log("hello");
// ...
// ...

// let time = 0;
// let id = setInterval(() => {
//   console.log((time += 100));
//   if (time > 6500) clearInterval(id);
// }, 100);

// const square = (x) =>
//   new Promise((resolve) => setTimeout(() => resolve(x ** 2), 1000));

// const plusFive = (x) =>
//   new Promise((resolve) => setTimeout(() => resolve(x + 5), 3000));

// const cube = (x) =>
//   new Promise((resolve) => setTimeout(() => resolve(x ** 3), 2000));

// function delay(ms) {
//   return function (x) {
//     return new Promise((resolve) => setTimeout(() => resolve(x), ms));
//   };
// }

// console.time("qwerty");
// square(2) // 1s
//   .then((x) => plusFive(x)) // 3s
//   .then(delay(5000)) // 5s
//   .then((x) => cube(x)) // 2s
//   .then((x) => {
//     console.log(x);
//     console.timeEnd("qwerty"); // → 11s
//   });
// ____________________________________________________________________________________________
// Что выведет код ниже?

// let promise = new Promise(function (resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });
// promise.then(alert);
// _________________________________________________________________________________________________
// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(() => resolve(), ms);
//   });
// }

// delay(3000).then(() => console.log("выполнилось через 3 секунды"));
// _________________________________________________________________________________________________

const p1 = new Promise((resolve, reject) =>
  setTimeout(() => reject(1), Math.random() * 2000 + 500)
);

const p2 = new Promise((resolve) =>
  setTimeout(() => resolve(2), Math.random() * 2000 + 500)
);

const p3 = new Promise((resolve) =>
  setTimeout(() => resolve(3), Math.random() * 2000 + 500)
);

Promise.allSettled([p1, p2, p3]).then(
  (values) => {
    console.log(values);
  },
  (err) => console.log(err)
);
// function allsettled(p) {
//   return new Promise((resolve) => {
//     let result = [];
//     let count = 0;
//     for (let i = 0; i < p.length; i++) {
//       p[i]
//         .then(
//           (value) => ({ status: "fulfilled", value }),
//           (reason) => ({ status: "rejected", reason })
//         )
//         .then((data) => {
//           result[i] = data;
//           count++;
//           if (count === p.length) resolve(result);
//         });
//     }
//   });
// }
// allsettled([p1, p2, p3]).then(
//   (values) => {
//     console.log(values);
//   },
//   (err) => console.log(err)
// );
