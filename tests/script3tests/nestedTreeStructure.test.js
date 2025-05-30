const nestedTreeStructure = require("../../utils/script3utils/nestedTreeStructure");

describe("nestedTreeStructure function", () => {
  let flatObj = {
    a: 1,
    "b.c": 2,
    "b.d.e": 3,
    "b.d.f": 4,
    g: 5,
  };
  test("Argument must be object", () => {
    expect(flatObj).toBeDefined();
    expect(typeof flatObj).toBe("object");
  });

  test("Function must return object", () => {
    let res = nestedTreeStructure();

    expect(typeof res).toBe("object");
  });
});
