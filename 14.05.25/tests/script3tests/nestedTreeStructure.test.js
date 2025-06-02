const nestedTreeStructure = require("../../utils/script3utils/nestedTreeStructure");

describe("nestedTreeStructure function", () => {
  test("Given flatted Object  , When function is called , Then return Nested object tree", () => {
    let object = {
      a: 1,
      "b.c": 2,
      "b.d.e": 3,
      "b.d.f": 4,
      g: 5,
    };

    expect(nestedTreeStructure(object)).toEqual({
      a: 1,
      b: { c: 2, d: { e: 3, f: 4 } },
      g: 5,
    });
  });

  test("Given empty object , When function is called , Then return empty object", () => {
    expect(nestedTreeStructure({})).toEqual({});
  });

  test("Given flatted object , When there are оne key already has a primitive value, and the same key is nested , Then it return primitive value", () => {
    expect(nestedTreeStructure({ a: 1, "a.b": 2 })).toEqual({ a: 1 });
  });
});
