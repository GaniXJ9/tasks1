export default class Shape {
  static shapesList = [];
  constructor() {
    this.container = document.querySelector(".figure-container");
    this.shapesCount = 0;
    this.newX = 0;
    this.newY = 0;
    this.startX = 0;
    this.startY = 0;
  }

  isOverlap(shape1, shape2) {
    return !(
      shape1.right <= shape2.left ||
      shape1.left >= shape2.right ||
      shape1.bottom <= shape2.top ||
      shape1.top >= shape2.bottom
    );
  }

  mouseDown(targetShape, event) {
    this.startX = event.clientX;
    this.startY = event.clientY;

    document.addEventListener("mousemove", (event) => {
      this.newX = this.startX - event.clientX;
      this.newY = this.startY - event.clientY;

      this.startX = event.clientX;
      this.startY = event.clientY;

      targetShape.style.left = this.startX + "px";
      targetShape.style.top = this.startY + "px";
      console.log(this.newX, this.newY);
    });
    document.addEventListener("mouseup", mouseUp);
  }
}
