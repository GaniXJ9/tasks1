function deepMerge(obj1, obj2) {
  for (let key in obj2) {
    if (typeof obj2[key] === "object" && typeof obj1[key] === "object") {
      obj1[key] = deepMerge(obj1[key], obj2[key]);
    } else {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

console.log(deepMerge({}, {}));

module.exports = deepMerge;
