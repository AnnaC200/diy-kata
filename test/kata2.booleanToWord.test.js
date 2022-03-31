const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes or No", () => {
    expect(booleanToWord(true)).toBe('Yes');
    expect(booleanToWord(false)).toBe('No');
  });
});
