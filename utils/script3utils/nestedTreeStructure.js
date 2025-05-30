function nestedTreeStructure(flatObj) {
  const result = {};

  for (const key in flatObj) {
    const keys = key.split("");
    let current = result;

    keys.forEach((part, index) => {
      if (index === keys.length - 1) {
        current[part] = flatObj[key];
      } else {
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    });
  }

  return result;
}

module.exports = nestedTreeStructure;
