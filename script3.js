//1) Implement a basic event emitter with `on()`, `off()`, and `emit()` methods.

// class Emitter {
//   constructor() {
//     this.events = {};
//   }

//   on(eventName, callback) {
//     if (!this.events[eventName]) {
//       this.events[eventName] = [];
//       this.events[eventName].push(callback);
//     }
//   }
//   off(eventName, callback) {
//     this.events[eventName] = this.events[eventName].filter(
//       (eventCallback) => callback !== eventCallback
//     );
//   }

//   emit(eventName, args) {
//     const event = this.events[eventName];
//     event && event.forEach((callback) => callback.call(null, args));
//   }
// }

// let emitter = new Emitter();

// emitter.on("SayHello", () => {
//   console.log("Hello");
// });

// emitter.emit("SayHello");

//2) Write a memoization function that caches results based on input arguments.

// let inp = document.getElementById("inp");

// let inputValue;

// inp.addEventListener("input", debouncer(setInputValue));

// function setInputValue() {
//   inputValue = inp.value;
//   localStorage.setItem("value", inputValue);
//   console.log("Данные сохранились в LocalStorage");
// }

// function debouncer(callback) {
//   let timeout;

//   return () => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }

//     timeout = setTimeout(() => {
//       callback();
//     }, 2000);
//   };
// }

// 3) Implement a state machine that manages different states and transitions based on inputs.

// let todosContainer = document.querySelector(".todos__container");
// let todoBtn = document.getElementById("todoBtn");
// let todoInp = document.getElementById("todosInp");

// class PreudoRedux {
//   constructor() {
//     this.todolist = [];
//   }

//   addTodo(todo) {
//     this.todolist.push(todo);
//     this.renderToDoList();
//   }

//   renderToDoList() {
//     let li = document.createElement("li");
//     this.todolist.map((el) => {
//       li.textContent = el;
//     });
//     todosContainer.append(li);
//   }
// }

// let action = new PreudoRedux();

// todoBtn.addEventListener("click", () => {
//   action.addTodo(todoInp.value);
//   todoInp.value = "";
// });

// 4) Create a function that converts a flat array of objects with `id` and `parentId` into a nested tree structure.

// let flatObj = {
//   a: 1,
//   "b.c": 2,
//   "b.d.e": 3,
//   "b.d.f": 4,
//   g: 5,
// };

// function nestedTreeStructure(flatObj) {
//   const result = {};

//   for (const key in flatObj) {
//     const keys = key.split(".");
//     let current = result;

//     keys.forEach((part, index) => {
//       if (index === keys.length - 1) {
//         current[part] = flatObj[key];
//       } else {
//         if (!current[part]) {
//           current[part] = {};
//         }
//         current = current[part];
//       }
//     });
//   }

//   return result;
// }

// console.log(nestedTreeStructure(flatObj));
// 5) Write a function that deep merges multiple objects, handling nested structures and arrays.

// let user = {
//   name: "Alice",

//   roles: ["admin"],
//   preferences: {
//     theme: "dark",
//   },
//   isActive: true,
// };

// let additionalInfo = {
//   roles: ["student"],
//   preferences: {
//     loc: "bren",
//     someArr: ["some", "thing"],
//   },
//   isVerified: false,
// };

// function deepMerge(obj1, obj2) {
//   for (let key in obj2) {
//     if (typeof obj2[key] === "object" && typeof obj1[key] === "object") {
//       obj1[key] = deepMerge(obj1[key], obj2[key]);
//     } else {
//       obj1[key] = obj2[key];
//     }
//   }
//   return obj1;
// }

// console.log(deepMerge(user, additionalInfo));
