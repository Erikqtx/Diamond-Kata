const diamond = function (char) {
  //Array to output
  var diamond = [];
  //to put in hyphens
  var hyphen = "-";
  //to help with middle hyphens
  var middle = "-";
  //to reprint each Line
  function charLine() {
    var codeForA = String("A").charCodeAt(0);
    var n = char.charCodeAt(0) - codeForA;
    //to get the middle Parts correctly
    if (char === "A") {
      return char;
    }
    if (char === "B") {
      return char + middle + char;
    }
    //to fix the middle part for all other letters
    while (char !== "A" && char !== "B") {
      return char + middle.repeat(2 * n - 1) + char;
    }
    return char + hyphen.repeat(2 * n - 1) + char;
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
  diamond.push(charLine(char));
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
