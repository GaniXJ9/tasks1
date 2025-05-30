const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};

function objectFlat(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    let currentKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object") {
      objectFlat(obj[key], currentKey, result);
    } else {
      result[currentKey] = obj[key];
    }
  }
  return result;
}

console.log(objectFlat(nestedObject));

module.exports = objectFlat;
