let deepMerge = require("../../utils/script3utils/deepMerge");

describe("DeepMerge function", () => {
  test("Given two objects , when function is called , Then return deepMerged object", () => {
    let obj1 = {
      name: "Alice",

      roles: ["admin"],
      preferences: {
        theme: "dark",
      },
      isActive: true,
    };

    let obj2 = {
      roles: ["student"],
      preferences: {
        loc: "bren",
        someArr: ["some", "thing"],
      },
      isVerified: false,
    };
    expect(deepMerge(obj1, obj2)).toEqual({
      name: "Alice",
      roles: ["student"],
      preferences: { theme: "dark", loc: "bren", someArr: ["some", "thing"] },
      isActive: true,
      isVerified: false,
    });
  });
  test("Given two objects , when one of them is empty , Then return not empty object", () => {
    let obj1 = {
      name: "Alice",

      roles: ["admin"],
      preferences: {
        theme: "dark",
      },
      isActive: true,
    };
    let obj2 = {};
    expect(deepMerge(obj1, obj2)).toEqual(obj1);
  });

  test("Given two empty objects , When function is called , Then return empty object", () => {
    expect(deepMerge({}, {})).toEqual({});
  });

  test("Given two objects , When two object has same key but different primitive value , Then owerrite value of the first object to second object", () => {
    expect(deepMerge({ a: 10 }, { a: 1 })).toEqual({ a: 1 });
  });
});
