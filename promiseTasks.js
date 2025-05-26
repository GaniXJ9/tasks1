// / ----------------------------------------------- 19.05.25----------------------------

// 1) Create a function `promiseSequence()` that takes an array of Promises and executes them in
// sequence, regardless of their resolve/reject status.

// let promises = [
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("Первый результат"), 1000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("Второй результат"), 2000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("Третий результат"), 1500)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject("Четвертый результат ошибка"), 1500)
//   ),
// ];

//  Вариант 1

// function promiseSequence(arr) {
//   return Promise.allSettled(arr).then((res) => {
//     res.forEach((result) => console.log(result.value || result.reason));
//   });
// }

// Вариант 2

// async function promiseSequence(PromiseArr) {
//   let promiseResultArr = PromiseArr.map((promise) =>
//     promise
//       .then((res) => ({ status: "fulfilled", value: res }))
//       .catch((res) => ({ status: "rejected", reason: res }))
//   );

//   let res = await Promise.all(promiseResultArr);

//   console.log(res);
// }

// promiseSequence(promises);

// 2) Implement a function `raceWithTimeout()` that accepts
//  an array of Promises and a timeout value, resolving with the first Promise
//  to settle or rejecting with a timeout error.

// let promises = [
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("Первый результат"), 1000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("Второй результат"), 2500)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("Третий результат"), 500)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject("Четвертый результат ошибка"), 1500)
//   ),
// ];

// Вариант 1

// function raceWithTimeout(promiseArr, timeOut) {
//   return new Promise((res, rej) => {
//     let timeOutPromise = new Promise((resolveTime, rejectTime) => {
//       setTimeout(() => {
//         rejectTime("Time out");
//       }, timeOut);
//     });

//     Promise.race([Promise.race(promiseArr), timeOutPromise])
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// }

// Вариант 2

// function raceWithTimeout(promiseArr, timeOut) {
//   let flag;

//   return new Promise((resolve, reject) => {
//     let newPromiseArr = [
//       ...promiseArr,
//       new Promise((resolveTime, rejectTime) => {
//         setTimeout(() => {
//           rejectTime("Time Out");
//         }, timeOut);
//       }),
//     ];

//     for (let promise of newPromiseArr) {
//       promise
//         .then((res) => {
//           if (!flag) {
//             flag = true;
//             resolve(res);
//           }
//         })
//         .catch((err) => {
//           if (!flag) {
//             flag = true;
//             reject(err);
//           }
//         });
//     }
//   })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// raceWithTimeout(promises, 3000);

//3) Write a function that implements a retry mechanism for a Promise-based function, with exponential backoff.

// const requestAttemp = () => {
//   return new Promise((resolve, reject) => {
//     let randomResult = Math.round(Math.random() * 10);
//     if (randomResult % 2 === 0) {
//       resolve("Some Data");
//     } else {
//       reject("Ошибка");
//     }
//   });
// };

// Вариант 1

// function retryWithBackoff(promise, attempCount, delay) {
//   let timeOut = delay * 2;
//   let currentAttempCount = attempCount - 1;
//   promise()
//     .then((res) => {
//       console.log(`Резултать : ${res} `);
//     })
//     .catch((err) => {
//       if (attempCount === 0) {
//         console.log(`Попытки закончились, Результат: ${err}`);
//       } else {
//         setTimeout(() => {
//           console.log(`Результат : ${err} , Время выполнения: ${delay} ,
//             Осталось попыток: ${currentAttempCount}`);
//           retryWithBackoff(promise, currentAttempCount, timeOut);
//         }, delay);
//       }
//     });
// }

// Вариант 2
// async function retryWithBackoff(promise, attempCount, delay) {
//   for (let i = 0; i < attempCount; i++) {
//     try {
//       let res = await promise();
//       setTimeout(() => {
//         console.log(`Резултать : ${res} `);
//       }, delay);
//       break;
//     } catch (err) {
//       setTimeout(() => {
//         console.log(`Резултать : ${err} , Попыток осталось : ${--attempCount}`);
//       }, delay);
//       delay *= 2;
//     }
//   }
// }

// retryWithBackoff(requestAttemp, 5, 500);

// 4) Implement a function that throttles another function’s execution, ensuring it only runs once in a specified interval.

// let promiseResult = PromiseDebounce(requestAttemp, 3000);

// function requestAttemp() {
//   return new Promise((resolve, reject) => {
//     let randomResult = Math.round(Math.random() * 10);
//     if (randomResult % 2 === 0) {
//       resolve("Some Data");
//     } else {
//       reject("Ошибка");
//     }
//   });
// }

// Варинат 1
// function PromiseDebounce(promise, blockRequestTimeout) {
//   let myTimeOut;

//   return () => {
//     if (myTimeOut) {
//       clearTimeout(myTimeOut);
//     }
//     myTimeOut = setTimeout(() => {
//       promise()
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, blockRequestTimeout);
//   };
// }

// Вариант 2
// function PromiseDebounce(promise, blockRequestTimeout) {
//   let isRunning = false;
//   let myTimeout;

//   return () => {
//     if (isRunning) {
//       return;
//     }

//     if (myTimeout) {
//       clearTimeout(myTimeout);
//     }

//     myTimeout = setTimeout(() => {
//       isRunning = true;
//       promise()
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, blockRequestTimeout);
//   };
// }

// promiseResult();
// promiseResult();
// promiseResult();

// setTimeout(() => {
//   promiseResult();
// }, 3500);

// 5) Create a function that transforms a callback-based API  into a Promise-based one (`promisify`).

function sayHello() {
  setTimeout(() => {
    console.log("Hello");
  }, 2000);
}

// Вариант 1
// function promisify(fn) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       fn(...args, (err, result) => {
//         if (err) return reject(err);
//         resolve(result);
//       });
//     });
//   };
// }

// Вариант 2
// function promisify(fn) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       try {
//         fn(...args, (err, result) => {
//           if (err) return reject(err);
//           resolve(result);
//         });
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };
// }

// let hello = promisify(sayHello);

// console.log(hello());
