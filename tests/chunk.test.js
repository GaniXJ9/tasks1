const chunk = require("../utils/chunk");

describe("Chunk function", () => {
  let numbers = [1, 2, 3, 4, 5];
  let itemCount = 3;

  test("First argument of the function must be array of a number", () => {
    expect(numbers).toBeDefined();
    expect(numbers.length).toBeGreaterThanOrEqual(1);
    for (let number of numbers) {
      expect(typeof number).toBe("number");
    }
  });

  test("Second argument must be one number and greater than 0", () => {
    expect(itemCount).toBeDefined();
    expect(itemCount).toBeGreaterThan(0);
    expect(typeof itemCount).toBe("number");
  });

  test("Result of a function must be array of arrays that contain numbers", () => {
    let res = chunk(numbers, itemCount);

    expect(Array.isArray(res)).toBe(true);

    for (let elem of res) {
      expect(Array.isArray(elem)).toBe(true);
    }
  });
});
