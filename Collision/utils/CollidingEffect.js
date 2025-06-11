import Shape from "./Shape.js";
import isColliding from "./isColliding.js";

export default function CollidingEffect(targetShape) {
  let targetShapeСoordinates = targetShape.getBoundingClientRect();

  for (let shape of Shape.shapesList) {
    let currentShapeСoordinates = shape.getBoundingClientRect();

    if (shape === targetShape) continue;

    // if (
    //   ((targetShapeСoordinates.left > currentShapeСoordinates.left &&
    //     targetShapeСoordinates.left - 15 < currentShapeСoordinates.right) ||
    //     (targetShapeСoordinates.right + 15 > currentShapeСoordinates.left &&
    //       targetShapeСoordinates.right < currentShapeСoordinates.right)) &&
    //   ((targetShapeСoordinates.top > currentShapeСoordinates.top &&
    //     targetShapeСoordinates.top - 15 < currentShapeСoordinates.bottom) ||
    //     (targetShapeСoordinates.bottom + 15 > currentShapeСoordinates.top &&
    //       targetShapeСoordinates.bottom < currentShapeСoordinates.bottom))
    // ) {
    //   checkCollisionSide(targetShape, shape);
    // } else {
    //   targetShape.style.border = "1px solid white";
    //   shape.style.border = "1px solid white";
    // }
    if (isColliding(targetShapeСoordinates, currentShapeСoordinates, 20)) {
      checkCollisionSide(targetShape, shape, 20);
    } else {
      targetShape.style.border = "1px solid white";
      shape.style.border = "1px solid white";
    }
  }
}

function checkCollisionSide(shape1, shape2, margin) {
  let shape1Сoordinates = shape1.getBoundingClientRect();
  let shape2Сoordinates = shape2.getBoundingClientRect();

  if (
    shape1Сoordinates.right > shape2Сoordinates.left &&
    shape1Сoordinates.right < shape2Сoordinates.right &&
    shape1Сoordinates.bottom + margin > shape2Сoordinates.top &&
    shape1Сoordinates.bottom < shape2Сoordinates.bottom
  ) {
    // shape1.style.borderBottom = "4px solid red";
    // shape2.style.borderTop = "4px solid green";

    shape1.style.top = shape2.offsetTop - shape1Сoordinates.height + "px";
    shape1.style.left = shape2.offsetLeft + "px";

    console.log("Угол C top"); // DONE
  } else if (
    shape1Сoordinates.right + margin > shape2Сoordinates.left &&
    shape1Сoordinates.right < shape2Сoordinates.right &&
    shape1Сoordinates.bottom > shape2Сoordinates.top &&
    shape1Сoordinates.bottom < shape2Сoordinates.bottom
  ) {
    // shape1.style.borderRight = "4px solid red";
    // shape2.style.borderLeft = "4px solid green";

    shape1.style.left = shape2.offsetLeft - shape1Сoordinates.width + "px";
    shape1.style.top = shape2.offsetTop + "px";

    console.log("Угол C left"); // DONE
  } else if (
    shape1Сoordinates.right + margin > shape2Сoordinates.left &&
    shape1Сoordinates.right < shape2Сoordinates.right &&
    shape1Сoordinates.bottom + margin > shape2Сoordinates.top &&
    shape1Сoordinates.bottom < shape2Сoordinates.bottom
  ) {
    // shape1.style.borderRight = "4px solid red";
    // shape1.style.borderBottom = "4px solid red";
    // shape2.style.borderLeft = "4px solid green";
    // shape2.style.borderTop = "4px solid green";

    shape1.style.left = shape2.offsetLeft - shape1Сoordinates.width + "px";
    shape1.style.top = shape2.offsetTop + "px";

    console.log("Угол С"); // DONE
  } else if (
    shape1Сoordinates.left > shape2Сoordinates.left &&
    shape1Сoordinates.left - margin < shape2Сoordinates.right &&
    shape1Сoordinates.bottom > shape2Сoordinates.top &&
    shape1Сoordinates.bottom < shape2Сoordinates.bottom
  ) {
    // shape1.style.borderLeft = "4px solid red";
    // shape2.style.borderRight = "4px solid green";

    shape1.style.left = shape2.offsetLeft + shape2Сoordinates.width + "px";
    shape1.style.top = shape2.offsetTop + "px";

    console.log("Угол D Left"); //DONE
  } else if (
    shape1Сoordinates.left > shape2Сoordinates.left &&
    shape1Сoordinates.left < shape2Сoordinates.right &&
    shape1Сoordinates.top > shape2Сoordinates.top &&
    shape1Сoordinates.top - margin < shape2Сoordinates.bottom
  ) {
    // shape1.style.borderTop = "4px solid red";
    // shape2.style.borderBottom = "4px solid green";

    shape1.style.top = shape2.offsetTop + shape1Сoordinates.height + "px";
    shape1.style.left = shape2.offsetLeft + "px";

    console.log("Угол D Top"); //DONE
  } else if (
    shape1Сoordinates.left > shape2Сoordinates.left &&
    shape1Сoordinates.left - margin < shape2Сoordinates.right &&
    shape1Сoordinates.bottom + margin > shape2Сoordinates.top &&
    shape1Сoordinates.bottom < shape2Сoordinates.bottom
  ) {
    // shape1.style.borderLeft = "4px solid red";
    // shape1.style.borderBottom = "4px solid red";
    // shape2.style.borderRight = "4px solid green";
    // shape2.style.borderTop = "4px solid green";

    shape1.style.top = shape2.offsetTop - shape1Сoordinates.height + "px";
    shape1.style.left = shape2.offsetLeft + "px"; //DONE

    console.log("Угол D");
  } else if (
    shape1Сoordinates.right + margin > shape2Сoordinates.left &&
    shape1Сoordinates.right < shape2Сoordinates.right &&
    shape1Сoordinates.top > shape2Сoordinates.top &&
    shape1Сoordinates.top < shape2Сoordinates.bottom
  ) {
    // shape1.style.borderRight = "4px solid red";
    // shape2.style.borderLeft = "4px solid green";

    shape1.style.left = shape2.offsetLeft - shape1Сoordinates.width + "px";
    shape1.style.top = shape2.offsetTop + "px";

    console.log("Угол B left"); //DONE
  } else if (
    shape1Сoordinates.right > shape2Сoordinates.left &&
    shape1Сoordinates.right < shape2Сoordinates.right &&
    shape1Сoordinates.top > shape2Сoordinates.top &&
    shape1Сoordinates.top - margin < shape2Сoordinates.bottom
  ) {
    // shape1.style.borderTop = "4px solid red";
    // shape2.style.borderBottom = "4px solid green";

    shape1.style.top = shape2.offsetTop + shape1Сoordinates.height + "px";
    shape1.style.left = shape2.offsetLeft + "px";

    console.log("Угол B top"); //DONE
  } else if (
    shape1Сoordinates.right + margin > shape2Сoordinates.left &&
    shape1Сoordinates.right < shape2Сoordinates.right &&
    shape1Сoordinates.top > shape2Сoordinates.top &&
    shape1Сoordinates.top - margin < shape2Сoordinates.bottom
  ) {
    // shape1.style.borderRight = "4px solid red";
    // shape1.style.borderTop = "4px solid red";
    // shape2.style.borderLeft = "4px solid green";
    // shape2.style.borderBottom = "4px solid green";

    shape1.style.left = shape2.offsetLeft - shape1Сoordinates.width + "px";
    shape1.style.top = shape2.offsetTop + "px";

    console.log("Угол B "); //DONE
  } else {
    // shape1.style.borderLeft = "4px solid red";
    // shape1.style.borderTop = "4px solid red";
    // shape2.style.borderRight = "4px solid yellow";
    // shape2.style.borderBottom = "4px solid green";

    shape1.style.left = shape2.offsetLeft + shape1Сoordinates.width + "px";
    shape1.style.top = shape2.offsetTop + "px";
    console.log("Угол A");
  }
}
