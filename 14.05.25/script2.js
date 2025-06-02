// 1)Implement a recursive function to generate all possible permutations of an array.

// let letters = ["a", "b", "c"];

// function getAllPermutation(arr) {
//   let result = [];
//   if (arr.length === 0) return [[]];
//   for (let i = 0; i < arr.length; i++) {
//     let currentItem = arr[i];
//     let newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
//     let suffleVariantsArr = getAllPermutation(newArr);

//     for (let suffleVar of suffleVariantsArr) {
//       result.push([currentItem, ...suffleVar]);
//     }
//   }

//   return result;
// }

// console.log(getAllPermutation(letters));

//2) - Write a function that returns all subsets of a given array (including the empty set).

// let numbers = [1, 2, 3];

// function getAllSubSet(arr) {
//   let subsets = [[]];
//   for (let i = 0; i < arr.length; i++) {
//     let curentItem = arr[i];
//     let newSet = subsets.map((el) => {
//       return [...el, curentItem];
//     });

//     subsets = [...subsets, ...newSet];
//   }

//   return subsets;
// }

// console.log(getAllSubSet(numbers));

// 3) Create a function that mimics the behavior of the `.reduce()` method without using it.

// let numbers = [1, 2, 3, 4, 5];

// function mimicReduce(arr, callback, initNumber) {
//   for (let i = 0; i < arr.length; i++) {
//     initNumber = callback(arr[i], initNumber);
//   }
//   return initNumber;
// }

// function getSum(num, initNumber) {
//   return (initNumber += num);
// }

// console.log(mimicReduce(numbers, getSum, 0));

// 4) Implement a function that flattens a deeply nested object while preserving key paths.

// const nestedObject = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: 4,
//     },
//   },
//   g: 5,
// };

// function objectFlat(obj, parentKey, result) {
//   for (let key in obj) {
//     let currentKey = parentKey ? `${parentKey}.${key}` : key;
//     if (typeof obj[key] === "object") {
//       objectFlat(obj[key], currentKey, result);
//     } else {
//       result[currentKey] = obj[key];
//     }
//   }
//   return result;
// }

// console.log(objectFlat(nestedObject, "", {}));

// 5) Write a higher-order function `debounce()` that delays the execution of a given function until after a specified time interval has passed since the last call.

// let btn = document.getElementById("debounceBtn");

// btn.addEventListener("click", debounce(sayHello, 3000));

// function sayHello() {
//   console.log("Hello");
// }

// function debounce(fn, delay) {
//   let timeout;

//   return () => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// }
