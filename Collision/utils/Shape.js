import isColliding from "./isColliding.js";

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
      shape1.right + 20 <= shape2.left ||
      shape1.left - 20 >= shape2.right ||
      shape1.bottom + 20 <= shape2.top ||
      shape1.top - 20 >= shape2.bottom
    );
  }

  grapShape(targetShape, event) {
    this.startX = event.clientX;
    this.startY = event.clientY;

    let targetShapeStartPosition = targetShape.getBoundingClientRect();
    this.boundMoveShape = this.moveShape.bind(this, targetShape);
    this.boundDropShape = this.dropShape.bind(
      this,
      targetShapeStartPosition,
      targetShape
    );

    document.addEventListener("mousemove", this.boundMoveShape);
    document.addEventListener("mouseup", this.boundDropShape);
  }

  moveShape(targetShape, event) {
    let zone = this.container.getBoundingClientRect();

    this.newX = this.startX - event.clientX;
    this.newY = this.startY - event.clientY;

    this.startX = event.clientX;
    this.startY = event.clientY;

    if (
      targetShape.offsetLeft >= 0 &&
      targetShape.offsetLeft + targetShape.width <= zone.width
    ) {
      targetShape.style.left = targetShape.offsetLeft - this.newX + "px";
    } else {
      if (targetShape.offsetLeft < 100) {
        targetShape.style.left = "0px";
      } else {
        targetShape.style.left = zone.width - targetShape.width - 1 + "px";
      }
    }

    if (
      targetShape.offsetTop >= 0 &&
      targetShape.offsetTop + targetShape.height <= zone.height
    ) {
      targetShape.style.top = targetShape.offsetTop - this.newY + "px";
    } else {
      if (targetShape.offsetTop < 100) {
        targetShape.style.top = "0px";
      } else {
        targetShape.style.top = zone.height - targetShape.height - 1 + "px";
      }
    }
  }

  dropShape(targetShapeStartPosition, targetShape) {
    isColliding(targetShape);

    document.removeEventListener("mousemove", this.boundMoveShape);
    document.removeEventListener("mouseup", this.boundDropShape);
  }
}
