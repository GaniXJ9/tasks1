function charFrequency(word) {
  let lowerCaseWord = word.toLowerCase();
  let result = {};

  for (let letter of lowerCaseWord) {
    if (!result.hasOwnProperty(letter))
      result[letter] = lowerCaseWord.split("").reduce((initNum, item) => {
        if (item === letter) {
          initNum++;
        }
        return initNum;
      }, 0);
  }

  return result;
}

module.exports = charFrequency;
