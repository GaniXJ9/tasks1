export default class Square {
  constructor() {
    this.sqCount = 0;
    this.squares = [];
  }
  createSquare() {
    let container = document.querySelector(".figure-container");
    let square = document.createElement("canvas");

    square.width = 60;
    square.height = 60;
    square.classList.add("figure");

    square.style.left =
      Math.floor(Math.random() * (container.clientWidth - 60)) + "px";
    square.style.top =
      Math.floor(Math.random() * (container.clientHeight - 60)) + "px";

    this.sqCount++;

    container.append(square);
    this.squares.push({
      id: this.sqCount,
      positionX: square.offsetLeft,
      positionY: square.offsetTop,
    });

    console.log(this.squares);
  }
}
