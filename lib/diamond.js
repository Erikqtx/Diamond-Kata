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
  //Array for top
  var top = [];
  //Array for middle
  var middle = [];
  //Array for bottom
  var bottom = [];
  //var for char
  //function to get input as ASCII Char

  //Empty string
  if (char) {
    return diamond;
  }
  //A-Diamond
  if (char === "A") {
    diamond.push("A");
  }
  //B-Diamond
  if (char === "B") {
    diamond.push(hyphen + "A" + hyphen);
    diamond.push(char + hyphen + char);
    diamond.push(hyphen + "A" + hyphen);
  }
  if (char != "A" && char != "B") {
    var g = String.fromCharCode(char);
    var chara = char.charCodeAt(g);
    n = g - asc;
    l = g - 1;
    hyphen.repeat(n);
    console.log(hyphen);
    console.log(l);
    console.log(n);
  }
  return diamond;
};

module.exports = {
  diamond,
};
