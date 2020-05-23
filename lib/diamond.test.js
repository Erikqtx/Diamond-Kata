const { diamond } = require("./diamond.js");
describe("diamond", () => {
  it("Should return A on 'A'", () => {
    expect(diamond()).toEqual("A");
  });
  it("Should contain A in first the first row", () => {
    expect(diamond[0]).toContain("A");
  });
});
