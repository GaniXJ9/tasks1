const chunk = require("../../utils/script4utils/chunk");

describe("Chunk function", () => {
  test("Given array of number and count , When function is called , Then return chunked array of array by count ", () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  test("Given array of number and count , When count is 0 , Then return empty array", () => {
    expect(chunk([1, 2, 3, 4, 5], 0)).toEqual([]);
  });
  test("Input : [1, 2, 3, 4, 5], 1 ; Output : [[1], [2], [3], [4], [5]]", () => {
    expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
  });

  test("Given empty array  and count , When function is called , Then return empty array", () => {
    expect(chunk([], 1)).toEqual([]);
    expect(chunk([], 0)).toEqual([]);
  });

  test("Input : [1 , 2] , 5 ;  Output : [[1 , 2]]", () => {
    expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
  });

  test("Same action with another data type", () => {
    expect(chunk(["1", true, 45, undefined, null], 2)).toEqual([
      ["1", true],
      [45, undefined],
      [null],
    ]);
  });
});
