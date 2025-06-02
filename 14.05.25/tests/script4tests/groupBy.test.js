const groupBy = require("../../utils/script4utils/groupBy");

describe("Group By function", () => {
  test("Given array of objects and 'group key', When function is called , Then it returns object grouped by 'group key'", () => {
    let fruits = [
      { type: "fruit", name: "apple", color: "green" },
      { type: "veg", name: "carrot", color: "orange" },
      { type: "veg", name: "onion", color: "white" },
      { type: "fruit", name: "banana", color: "yellow" },
      { type: "fruit", name: "pear", color: "green" },
    ];

    expect(groupBy(fruits, "type")).toEqual({
      fruit: [
        { type: "fruit", name: "apple", color: "green" },
        { type: "fruit", name: "banana", color: "yellow" },
        { type: "fruit", name: "pear", color: "green" },
      ],
      veg: [
        { type: "veg", name: "carrot", color: "orange" },
        { type: "veg", name: "onion", color: "white" },
      ],
    });

    expect(groupBy(fruits, "color")).toEqual({
      green: [
        { type: "fruit", name: "apple", color: "green" },
        { type: "fruit", name: "pear", color: "green" },
      ],
      orange: [{ type: "veg", name: "carrot", color: "orange" }],
      white: [{ type: "veg", name: "onion", color: "white" }],
      yellow: [{ type: "fruit", name: "banana", color: "yellow" }],
    });
  });

  test("Given empty array , When function is called , Then it returns empty object", () => {
    expect(groupBy([], "type")).toEqual({});
  });

  test("Given array of objects and 'group key' , When there no such key equals to 'group key' in objects , Then return empty object", () => {
    let fruits = [
      { type: "fruit", name: "apple" },
      { type: "veg", name: "carrot" },
      { type: "veg", name: "onion" },
      { type: "fruit", name: "banana" },
      { type: "fruit", name: "pear" },
    ];
    expect(groupBy(fruits, "color")).toEqual({});
  });
});
