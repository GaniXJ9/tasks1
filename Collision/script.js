import Square from "./utils/Square.js";
import Rectangle from "./utils/Rectangle.js";
import Shape from "./utils/Shape.js";

let shape = new Shape();
let square = new Square();
let rectangle = new Rectangle();

let createSquareBtn = document.getElementById("create-square");
let createRectangleBtn = document.getElementById("create-rectangle");
let container = document.querySelector(".figure-container");

createSquareBtn.addEventListener("click", () => {
  square.createSquare();
});

createRectangleBtn.addEventListener("click", () => {
  rectangle.createRectangle();
});
