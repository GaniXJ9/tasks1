export default function isColliding(shape1, shape2, margin) {
  if (
    ((shape1.left > shape2.left && shape1.left - margin < shape2.right) ||
      (shape1.right + margin > shape2.left && shape1.right < shape2.right)) &&
    ((shape1.top > shape2.top && shape1.top - margin < shape2.bottom) ||
      (shape1.bottom + margin > shape2.top && shape1.bottom < shape2.bottom))
  ) {
    return true;
  } else {
    return false;
  }
}
