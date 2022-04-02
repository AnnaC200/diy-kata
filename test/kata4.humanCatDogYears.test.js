const { humanCatDogYears } = require("../src/kata4.humanCatDogYears");

describe("humanCatDogYears", () => {
    test ("returns an array of three numbers for humans, cats and dogs", () =>{
      expect(humanCatDogYears(10)).toEqual([10, 56, 69]);  
    });
});
