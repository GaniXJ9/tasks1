function getAllPermutation(arr) {
  let result = [];
  if (arr.length === 0) return [[]];
  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];
    let newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
    let suffleVariantsArr = getAllPermutation(newArr);

    for (let suffleVar of suffleVariantsArr) {
      result.push([currentItem, ...suffleVar]);
    }
  }

  return result;
}

console.log(getAllPermutation(["a"]));
module.exports = getAllPermutation;
