//Using our own custom assert object and equal method
/*var assert = {
  equal: function(firstValue, secondValue) {
    if (firstValue != secondValue)
      throw new Error('Assert failed, ' + firstValue + ' is not equal to ' + secondValue + '.');
  }
};*/

//using the default asserts library in Node
//var assert = require('assert');

// Look at the way we required Chai, only grabbing expect:
var expect = require("chai").expect;
var addTwoNumbers = require("../addTwoNumbers");

describe("addTwoNumbers()", function() {
  it("should add two numbers", function() {
    // 1. ARRANGE
    var x = 5;
    var y = 1;
    var sum1 = x + y;

    // 2. ACT
    var sum2 = addTwoNumbers(x, y);

    console.log("addTwoNumbers() should return the sum of its two parameters.");
    console.log("Expect " + sum1 + " to equal " + sum2 + ".");

    // 3. ASSERT
    try {
      assert.equal(sum1, sum2);

      console.log("Passed.");
    } catch (error) {
      console.log(error.message);
    }
  });
});
