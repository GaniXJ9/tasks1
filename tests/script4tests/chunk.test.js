const chunk = require("../../utils/script4utils/chunk");

describe("Chunk function", () => {
  test("Input : [1, 2, 3, 4, 5] , 3 ; Ouput : [[1, 2, 3],[4, 5]]", () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  test("Input : [1, 2, 3, 4, 5], 0 ; Ouput : []", () => {
    expect(chunk([1, 2, 3, 4, 5], 0)).toEqual([]);
  });
  test("Input : [1, 2, 3, 4, 5], 1 ; Output : [[1], [2], [3], [4], [5]]", () => {
    expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
  });

  test("Must return empty array [] , if there no items in arr", () => {
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
