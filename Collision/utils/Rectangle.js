export default class Rectangle {
  createRectangle() {
    let container = document.querySelector(".figure-container");
    let rectangle = document.createElement("canvas");

    rectangle.width = 100;
    rectangle.height = 60;
    rectangle.classList.add("figure");

    rectangle.style.left =
      Math.floor(Math.random() * (container.clientWidth - 0)) + "px";
    rectangle.style.top =
      Math.floor(Math.random() * (container.clientHeight - 60)) + "px";

    container.append(rectangle);
  }
}
