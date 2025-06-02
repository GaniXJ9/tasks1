const charFrequency = require("../../utils/script4utils/charFrequency");

describe("charFrequency function", () => {
  test("Given a string with repeating characters , When function is called , Then it returns correct frequency of each character", () => {
    expect(charFrequency("banana")).toEqual({
      b: 1,
      a: 3,
      n: 2,
    });
    expect(charFrequency("apple")).toEqual({
      a: 1,
      p: 2,
      l: 1,
      e: 1,
    });
  });

  test("Given a string with unique characters , When function is called , Then it returns object with value 1 of each key", () => {
    expect(charFrequency("asd")).toEqual({ a: 1, s: 1, d: 1 });
  });

  test("Given empty string , When function is called , Then it returns empty object", () => {
    expect(charFrequency("")).toEqual({});
  });

  test("Given a string with lowercase and uppercase characters  , When function is called , Then it return correct object without separating upper and lower case letters", () => {
    expect(charFrequency("AaAaAaBb")).toEqual({
      a: 6,
      b: 2,
    });
  });
});
