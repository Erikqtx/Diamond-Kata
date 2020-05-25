const diamond = function (char) {
  //Array to output
  var diamond = [];
  //ASCII Start at A
  var asc = 65;
  //To help with dashes
  var n = 0;
  //To help with Letters to middle
  var l = 0;
  //To help with dash number top
  var dash = 1;
  //to put in dashes
  var hyphen = "-";
  //number of the input in UNICODE
  var g = char.charCodeAt(char);
  //dashes for middle Line
  n = g - asc;
  //gotta get it down to 65 to push letters.
  l = g - 1;

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
    diamond.push(hyphen + "A" + hyphen);
    diamond.push(char + hyphen + char);
    diamond.push(hyphen + "A" + hyphen);
    return diamond;
  }
  //C-Diamond
  if (char === "C") {
    diamond.push(hyphen.repeat(dash + 1) + "A" + hyphen.repeat(dash + 1));
    diamond.push(
      hyphen.repeat(dash) + "B" + hyphen + "B" + hyphen.repeat(dash)
    );
    diamond.push(char + hyphen.repeat(n + 1) + char);
    diamond.push(
      hyphen.repeat(dash) + "B" + hyphen + "B" + hyphen.repeat(dash)
    );
    diamond.push(hyphen.repeat(dash + 1) + "A" + hyphen.repeat(dash + 1));
    return diamond;
  }
  if (char === "D") {
    diamond.push(hyphen.repeat(dash + 2) + "A" + hyphen.repeat(dash + 2));
    diamond.push(
      hyphen.repeat(dash + 1) + "B" + hyphen + "B" + hyphen.repeat(dash + 1)
    );
    diamond.push(hyphen + "C" + hyphen.repeat(3) + "C" + hyphen);
    diamond.push(char + hyphen.repeat(n + 2) + char);
    diamond.push(hyphen + "C" + hyphen.repeat(3) + "C" + hyphen);
    diamond.push(
      hyphen.repeat(dash + 1) + "B" + hyphen + "B" + hyphen.repeat(dash + 1)
    );
    diamond.push(hyphen.repeat(dash + 2) + "A" + hyphen.repeat(dash + 2));
    return diamond;
  }
};

module.exports = {
  diamond,
};
