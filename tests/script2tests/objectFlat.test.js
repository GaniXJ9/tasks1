const objectFlat = require("../../utils/script2utils/objectFlat");

describe("objectFlat function", () => {
  test("Given nested object , When function is called , Then return flatted array joined by dote", () => {
    let nestedObject = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4,
        },
      },
      g: 5,
    };
    expect(objectFlat(nestedObject)).toEqual({
      a: 1,
      "b.c": 2,
      "b.d.e": 3,
      "b.d.f": 4,
      g: 5,
    });
  });
});
