const diamond = function (char) {
  //create array to help with diamond
  var diamond = [];
  //to help with dashes
  var dash = "-";
  //to help with Lines
  var asc = 65;
  //variable to help functions
  var c = char;
  //Make each Line
  function Lines(char) {
    var n = char.charCodeAt(0) - asc;
    return char + "-".repeat(2 * n) + char;
  }

  //Get previousCharacter
  function prevChar(char) {
    var charCode = char.charCodeAt(0);
  }
  //Empty case
  if (!char) {
    return diamond;
  }
  //A-Case
  if (char === "A") {
    diamond = ["A"];
    return diamond;
  }
  //B-Case
  if (char === "B") {
    diamond.push(Lines(char));
    char = prevChar(char);
    dash += "-";
    diamond.unshift(dash + Lines(char) + dash);
    diamond.push(dash + Lines(char) + dash);
    return diamond;
  }
  //Other cases
  while (char !== "A" && char !== "B") {
    char = prevChar(char);
    dash += "-";
    diamond.unshift(dash + Lines(char) + dash);
    diamond.push(dash + Lines(char) + dash);
  }
  return diamond;
};

module.exports = {
  diamond,
};
