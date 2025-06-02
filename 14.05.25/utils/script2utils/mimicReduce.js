function mimicReduce(arr, callback, initNumber = 0) {
  for (let i = 0; i < arr.length; i++) {
    initNumber = callback(arr[i], initNumber);
  }
  return initNumber;
}

function getSum(num, initNumber) {
  return (initNumber += num);
}

console.log(mimicReduce([1, 2, 3], getSum, 0));

module.exports = mimicReduce;
