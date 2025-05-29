function chunk(arr, itemCount, result = []) {
  let count = 0;
  let group = [];

  for (let item of arr) {
    if (count < itemCount) {
      group.push(item);
      count++;
      if (!result.includes(group)) {
        result.push(group);
      }
    } else {
      let newArr = arr.splice(itemCount);
      chunk(newArr, itemCount, result);
    }
  }

  return result;
}

module.exports = chunk;
