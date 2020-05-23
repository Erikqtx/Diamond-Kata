const { diamond } = require("./diamond.js");
describe("diamond", () => {
  it("should return an empty string on ''", () => {
    expect(diamond("")).toEqual([]);
  });
  it("should return A on 'A'", () => {
    expect(diamond("A")).toEqual(["A"]);
  });
  it("should return the B-Diamond on 'B'", () => {
    expect(diamond("B")).toEqual(["--A--", "B--B", "--A--"]);
  });

  /*it("should return the C-Diamond on 'C'", () => {
    expect(diamond("C")).toEqual(["--A--", "-B-B-", "C--C", "-B-B", "--A--"]);
  }); 
  /*it("should contain A in first the first row", () => {
    expect(diamond[0]).toContain("A");
  }); */
});
