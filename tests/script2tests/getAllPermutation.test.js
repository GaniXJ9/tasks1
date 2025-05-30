const getAllPermutation = require("../../utils/script2utils/getAllPermutation");

describe("getAllPermutation function", () => {
  test("Given array , When function is called , Then return array of arrays with all possible shuffle compination", () => {
    let arr = ["a", "b", "c"];

    expect(getAllPermutation(arr)).toEqual([
      ["a", "b", "c"],
      ["a", "c", "b"],
      ["b", "a", "c"],
      ["b", "c", "a"],
      ["c", "a", "b"],
      ["c", "b", "a"],
    ]);
  });

  test("Given array that may includes same chars , When function is called , Then return array of arrays with all possible shuffle compination", () => {
    let arr = ["a", "b", "a"];

    expect(getAllPermutation(arr)).toEqual([
      ["a", "b", "a"],
      ["a", "a", "b"],
      ["b", "a", "a"],
      ["b", "a", "a"],
      ["a", "a", "b"],
      ["a", "b", "a"],
    ]);
  });

  test("Given array with 1 item , When function is called , Then return array of array with 1 item", () => {
    expect(getAllPermutation(["a"])).toEqual([["a"]]);
  });

  test("Given empty array , When function is called , Then return empty array of one empty array", () => {
    expect(getAllPermutation([])).toEqual([[]]);
  });
});
