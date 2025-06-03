import Shape from "./Shape.js";

export default class Rectangle extends Shape {
  createRectangle() {
    let width = 100;
    let height = 60;
    const maxAttempts = 100;
    let attempt = 0;
    let rectangle, left, top, newRect, isOverlapping;

    do {
      let containerRect = this.container.getBoundingClientRect();

      left = Math.floor(
        Math.random() * (this.container.clientWidth - width + 10)
      );
      top = Math.floor(
        Math.random() * (this.container.clientHeight - height + 10)
      );

      newRect = {
        left: containerRect.left + left,
        top: containerRect.top + top,
        right: containerRect.left + left + width,
        bottom: containerRect.top + top + height,
      };

      isOverlapping = false;

      for (let shapeItem of Shape.shapesList) {
        let existingItem = shapeItem.getBoundingClientRect();
        if (this.isOverlap(newRect, existingItem)) {
          isOverlapping = true;
          break;
        }
      }

      attempt++;

      if (!isOverlapping) {
        break;
      }
    } while (attempt < maxAttempts);

    if (!isOverlapping) {
      rectangle = document.createElement("canvas");
      rectangle.width = width;
      rectangle.height = height;
      rectangle.classList.add("figure");

      rectangle.style.left = left + "px";
      rectangle.style.top = top + "px";

      this.container.append(rectangle);
      Shape.shapesList.push(rectangle);
    } else {
      alert("Недостаточно места для новой фигуры.");
    }
  }
}
