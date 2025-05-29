function charFrequency(word) {
  let result = {};

  for (let letter of word) {
    if (!result.hasOwnProperty(letter))
      result[letter] = word.split("").reduce((initNum, item) => {
        if (item === letter) {
          initNum++;
        }
        return initNum;
      }, 0);
  }

  return result;
}

module.exports = charFrequency;
