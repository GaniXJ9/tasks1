export default class Shape {
  static shapesList = [];
  constructor() {
    this.container = document.querySelector(".figure-container");
    this.shapesCount = 0;
    this.newX = 0;
    this.newY = 0;
    this.startX = 0;
    this.startY = 0;
    this.boundMouseMove = null;
    this.boundMouseUp = null;
  }

  isOverlap(shape1, shape2) {
    return !(
      shape1.right <= shape2.left ||
      shape1.left >= shape2.right ||
      shape1.bottom <= shape2.top ||
      shape1.top >= shape2.bottom
    );
  }

  grapShape(targetShape, event) {
    this.startX = event.clientX;
    this.startY = event.clientY;

    this.boundMoveShape = this.moveShape.bind(this, targetShape);
    this.boundDropShape = this.dropShape.bind(this);

    document.addEventListener("mousemove", this.boundMoveShape);
    document.addEventListener("mouseup", this.boundDropShape);
  }

  moveShape(targetShape, event) {
    this.newX = this.startX - event.clientX;
    this.newY = this.startY - event.clientY;

    this.startX = event.clientX;
    this.startY = event.clientY;

    if (targetShape.offsetLeft >= 0 && targetShape.offsetLeft + 60 <= 820) {
      targetShape.style.left = targetShape.offsetLeft - this.newX + "px";

      console.log(targetShape.offsetTop);
      console.log(this.container.getBoundingClientRect());
    } else {
      if (targetShape.offsetLeft < 100) {
        targetShape.style.left = "0px";
      } else {
        targetShape.style.left = "760px";
      }
    }

    if (targetShape.offsetTop >= 0 && targetShape.offsetTop <= 560) {
      targetShape.style.top = targetShape.offsetTop - this.newY + "px";
    } else {
      if (targetShape.offsetTop < 100) {
        targetShape.style.top = "0px";
      } else {
        targetShape.style.top = "559px";
      }
    }
  }

  dropShape() {
    document.removeEventListener("mousemove", this.boundMoveShape);
    document.removeEventListener("mouseup", this.boundDropShape);
  }
}
