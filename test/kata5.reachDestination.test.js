const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {9-
    expect (reachDestination(44,10)).toEqual ('I should be there in 4.5 hours.')
  });
});
