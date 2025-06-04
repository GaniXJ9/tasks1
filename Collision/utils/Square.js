import Shape from "./Shape.js";

export default class Square extends Shape {
  createSquare() {
    let size = 60;
    let maxAttempts = 100;
    let attempt = 0;
    let square;
    let left;
    let top;
    let newRect;
    let isOverlapping;

    do {
      const containerRect = this.container.getBoundingClientRect();

      left = Math.floor(Math.random() * (this.container.clientWidth - size));
      top = Math.floor(Math.random() * (this.container.clientHeight - size));

      newRect = {
        left: containerRect.left + left,
        top: containerRect.top + top,
        right: containerRect.left + left + size,
        bottom: containerRect.top + top + size,
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

      if (!isOverlapping) break;
    } while (attempt < maxAttempts);

    if (!isOverlapping) {
      square = document.createElement("canvas");
      square.width = size;
      square.height = size;
      square.classList.add("figure");
      square.style.left = left + "px";
      square.style.top = top + "px";
      square.addEventListener("mousedown", (event) => {
        this.grapShape(square, event);
      });

      this.container.append(square);
      Shape.shapesList.push(square);
    } else {
      alert("Недостаточно места для новой фигуры.");
    }
  }
}
