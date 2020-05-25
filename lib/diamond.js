const diamond = function (char) {
  //Array to output
  var diamond = [];
  //ASCII Start at A
  var asc = 65;
  //To help with Letters to middle
  var l = 0;
  //To help with dash number top
  var dash = 0;
  //to put in dashes
  var hyphen = "-";
  //number of the input in UNICODE
  var g = char.charCodeAt(char);
  var z = String.fromCharCode(g);
  //dashes for middle Line
  n = g - asc;
  //gotta get it down to 65 to push letters.
  l = g - 1;
  function charLine() {
    var codeForA = String("A").charCodeAt(0);
    var n = char.charCodeAt(0) - codeForA;
    if (char === "A") {
      return char;
    }
    if (char === "B") {
      return char + hyphen + char;
    }
    return char + hyphen.repeat(2 * n + 1) + char;
  }

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
  //B-Diamond
  if (char === "B") {
    diamond.push(charLine(char));
    char = prevChar(char);
    diamond.unshift("-" + charLine(char) + "-");
    diamond.push("-" + charLine(char) + "-");
    return diamond;
  }
  //C-Diamond
  while (char !== "A") {
    char = prevChar(char);
    hyphen += "-";
    diamond.unshift(hyphen + charLine(char) + hyphen);
    diamond.push(hyphen + charLine(char) + hyphen);
  }
  return diamond;
};

module.exports = {
  diamond,
};
