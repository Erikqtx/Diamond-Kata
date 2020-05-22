const { diamond } = require("./diamond.js");
describe("diamond", () => {
  it("Should return A on 'A'", () => {
    expect(diamond()).toEqual("A");
  });
});
