const mimicReduce = require("../../utils/script2utils/mimicReduce");

describe("mimicReduce function", () => {
  test("Given array number, getSum function as callback and initial number , When function is called , Then it should return changed inital value", () => {
    function getSum(num, initNumber) {
      return (initNumber += num);
    }
    expect(mimicReduce([1, 2, 3, 4], getSum, 0)).toBe(10);
  });

  test("Given array number, getSum function as callback  , When initial number is not given , Then by default its value is 0", () => {
    function getSum(num, initNumber) {
      return (initNumber += num);
    }
    expect(mimicReduce([1, 2, 3, 4], getSum)).toBe(10);
  });

  test("Given array number, str function as callback and initial number , When function is called , Then it should return changed inital value", () => {
    function joinStr(item, initalValue) {
      return (initalValue += item);
    }
    expect(mimicReduce(["a", "b", "c"], joinStr, "")).toBe("abc");
  });
});
