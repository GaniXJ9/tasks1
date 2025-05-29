const groupBy = require("../utils/groupBy");

describe("Group By function", () => {
  let fruits = [
    { type: "fruit", name: "apple", color: "red", count: 1 },
    { type: "veg", name: "carrot", color: "orange", count: 2 },
    { type: "veg", name: "onion", color: "white", count: 4 },
    { type: "fruit", name: "banana", color: "yellow", count: 1 },
    { type: "fruit", name: "pear", color: "green", count: 2 },
    { type: "veg", name: "cucumber", color: "green", count: 1 },
    { type: "fruit", name: "mango", color: "orange", count: 4 },
    { type: "berry", name: "strawberry", color: "red", count: 1 },
    { type: "berry", name: "blueberry", color: "purple", count: 4 },
    { type: "veg", name: "beetroot", color: "purple", count: 3 },
    { type: "berry", name: "raspberry", color: "pink", count: 1 },
    { type: "berry", name: "cherries", color: "red", count: 1 },
    { type: "berry", name: "currant", color: "pink", count: 4 },
    { type: "fruit", name: "orange", color: "orange", count: 2 },
  ];

  let groupKey = "type";

  test("First argument must be array of objects", () => {
    expect(fruits).toBeDefined();
    expect(fruits.length).toBeGreaterThanOrEqual(1);
    expect(typeof fruits).toBe("object");
  });

  test("Second argument must be string and one of the object keys", () => {
    let firstItemOfArr = fruits[0];
    expect(groupKey).toBeDefined();
    expect(typeof groupKey).toBe("string");
    expect(Object.keys(firstItemOfArr).includes(groupKey)).toBe(true);
  });

  test("All objects must contain same keys", () => {
    let firstItemOfArr = fruits[0];
    for (let fruit of fruits) {
      expect(Object.keys(fruit)).toEqual(Object.keys(firstItemOfArr));
    }
  });

  test("Must return Object", () => {
    let res = groupBy(fruits, groupKey);
    expect(typeof res).toBe("object");
  });
});
