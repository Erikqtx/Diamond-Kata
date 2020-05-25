const { diamond } = require("./diamond.js");
describe("diamond", () => {
  //empty Case
  it("should return an empty string on ''", () => {
    expect(diamond("")).toEqual([]);
  });
  //A-Diamond
  it("should return A on 'A'", () => {
    expect(diamond("A")).toEqual(["A"]);
  });
  //B-Diamond
  it("should return the B-Diamond on 'B'", () => {
    expect(diamond("B")).toEqual(["-A-", "B-B", "-A-"]);
  });
  //C-Diamond
  it("should return the C-Diamond on 'C'", () => {
    expect(diamond("C")).toEqual(["--A--", "-B-B-", "C---C", "-B-B-", "--A--"]);
  });
  //D-Diamond
  it("should return the D-Diamond on 'D'", () => {
    expect(diamond("D")).toEqual([
      "---A---",
      "--B-B--",
      "-C---C-",
      "D-----D",
      "-C---C-",
      "--B-B--",
      "---A---",
    ]);
  });
  //E-Diamond
  it("should return the E-Diamond on 'E'", () => {
    expect(diamond("E")).toEqual([
      "----A----",
      "---B-B---",
      "--C---C--",
      "-D-----D-",
      "E-------E",
      "-D-----D-",
      "--C---C--",
      "---B-B---",
      "----A----",
    ]);
  });

  /*it("should contain A in  the first row", () => {
    expect(diamond[0]).toContain("A");
  }); */
  /*it("should contain A in  the last row", () => {
    expect(diamond[0]).toContain("A");
  }); */
});
