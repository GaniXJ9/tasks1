const HTMLParser = require("../../utils/script4utils/HTMLParser");

describe("HTMLParser function", () => {
  test("Given string with html structure , When function is called , Then return correct object stucture", () => {
    let structure = "<div>Hello <b>world</b>!</div>";

    expect(HTMLParser(structure)).toEqual({
      tag: "div",
      children: [
        "Hello ",
        {
          tag: "b",
          children: ["world"],
        },
        "!",
      ],
    });
  });

  test("Given string with no html tags , When function is called , Then return null", () => {
    expect(HTMLParser("")).toBeNull();
  });

  test("Given string with html structure , When function is called and there is no children inside tags , Then return correct object stucture", () => {
    const input = "<div></div>";
    const output = { tag: "div", children: [] };
    expect(HTMLParser(input)).toEqual(output);
  });
});
