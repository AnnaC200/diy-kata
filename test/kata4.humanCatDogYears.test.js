const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test ("returns an array of three numbers for humans, cats and dogs", () =>{
      expect(humanCatDogYears(10)).toEqual([10, 56, 69]);  
    });
});
