const HTMLParser = require("../utils/HTMLParser");

describe("HTMLParser function", () => {
  let structure = "<div>Hello <b>world</b>!</div>";

  test("Argument must be string type", () => {
    expect(structure).toBeDefined();
    expect(typeof structure).toBe("string");
  });

  test("Return null, if html structure do not contain any tags", () => {
    const input = "Просто текст без тегов";
    const result = HTMLParser(input);

    expect(result).toBeNull();
  });
});
