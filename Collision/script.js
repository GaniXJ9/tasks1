import Square from "./utils/Square.js";
import Rectangle from "./utils/Rectangle.js";

let square = new Square();
let rectangle = new Rectangle();

let createSquareBtn = document.getElementById("create-square");
let createRectangleBtn = document.getElementById("create-rectangle");

createSquareBtn.addEventListener("click", () => {
  square.createSquare();
});

createRectangleBtn.addEventListener("click", () => {
  rectangle.createRectangle();
});
