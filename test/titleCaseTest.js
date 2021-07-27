const assert = require("chai").assert;
const titleCase = require("../titleCase");

describe("#titleCase", () => {
  it('should return "This Is An Example" for "this is an example"', () => {
    assert.equal(titleCase("this is an example"), "This Is An Example");
  });

  it('should return "Test" for "test"', () => {
    assert.strictEqual(titleCase("test"), "Test");
  });

  it('should return "I R Cool" for "i r cool"', () => {
    assert.strictEqual(titleCase("i r cool"), "I R Cool");
  });

  it('should return "WHAT HAPPENS HERE" for "What Happens Here"', () => {
    assert.strictEqual(titleCase("WHAT HAPPENS HERE"), "What Happens Here");
  });

  it('should return "" for ""', () => {
    assert.strictEqual(titleCase(""), "");
  });

  it('should return "A" for "A"', () => {
    assert.strictEqual(titleCase("A"), "A");
  });
});
