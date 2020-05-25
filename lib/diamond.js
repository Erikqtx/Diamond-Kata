const diamond = function (char) {
  //Array to output
  var diamond = [];
  //to put in dashes
  var hyphen = "-";
  //var for middle hyphens
  var middle = "-";
  //to reprint each Line
  function charLine() {
    var codeForA = String("A").charCodeAt(0);
    var n = char.charCodeAt(0) - codeForA;
    if (char === "A") {
      return char;
    }
    if (char === "B") {
      return char + middle + char;
    }
    return char + hyphen.repeat(n) + char;
  }
  //to get the previous Character
  function prevChar() {
    var charCode = char.charCodeAt(0);
    if (char === "A") {
      return;
    }
    return String.fromCharCode(charCode - 1);
  }
  //Empty string
  if (!char) {
    return diamond;
  }
  //A-Diamond
  if (char === "A") {
    diamond.push("A");
    return diamond;
  }
  //All other diamonds
  while (char !== "A") {
    char = prevChar(char);
    diamond.unshift(hyphen + charLine(char) + hyphen);
    diamond.push(hyphen + charLine(char) + hyphen);
    hyphen += "-";
  }
  return diamond;
};

module.exports = {
  diamond,
};
