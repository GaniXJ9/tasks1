const getAllSubSet = require("../../utils/script2utils/getAllSubSet");

describe("getAllSubSet function", () => {
  test("Given array , When function is called , Then return array of all subset of items", () => {
    expect(getAllSubSet([1, 2, 3])).toEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
  });

  test("Given emptu arr , When function is called , Then return array of one empty array", () => {
    expect(getAllSubSet([])).toEqual([[]]);
  });
  test("Given array of empty arrays , When function is called , Then reutrn all subset of empty arrays", () => {
    expect(getAllSubSet([[], []])).toEqual([[], [[]], [[]], [[], []]]);
  });

  test("Given array where may be same chars , When function is called , Then return all subset", () => {
    expect(getAllSubSet([1, 1])).toEqual([[], [1], [1], [1, 1]]);
  });
});
