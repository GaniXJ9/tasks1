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
    } else if (itemCount === 0) {
      return [];
    } else {
      let newArr = arr.splice(itemCount);
      chunk(newArr, itemCount, result);
    }
  }

  return result;
}
console.log(chunk([], 1));
module.exports = chunk;
