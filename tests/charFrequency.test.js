const charFrequency = require("../utils/charFrequency");

describe("charFrequency function", () => {
  let word = "banana";

  test("Argument nust be a string", () => {
    expect(word).toBeDefined();
    expect(typeof word).toBe("string");
  });

  test("Function must return object", () => {
    let res = charFrequency(word);
    expect(typeof res).toBe("object");
  });

  test("Keys of returned obj must be a letters of a word", () => {
    let res = charFrequency(word);

    for (let key in res) {
      expect(word.includes(key)).toBe(true);
    }
  });

  test("Value of keys  must be  numbers", () => {
    let res = charFrequency(word);

    for (let key in res) {
      expect(typeof res[key]).toBe("number");
    }
  });
});
