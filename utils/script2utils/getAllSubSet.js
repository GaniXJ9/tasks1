function getAllSubSet(arr) {
  let subsets = [[]];
  for (let i = 0; i < arr.length; i++) {
    let curentItem = arr[i];
    let newSet = subsets.map((el) => {
      return [...el, curentItem];
    });

    subsets = [...subsets, ...newSet];
  }

  return subsets;
}

console.log(getAllSubSet([[], []]));

module.exports = getAllSubSet;
