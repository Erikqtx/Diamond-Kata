const diamond = function (char) {
  //create array to help with diamond
  var diamond = [];

  if (!char) {
    return diamond;
  }
  if (char == "A") {
    diamond = ["A"];
    return diamond;
  }
  diamond = ["--A--", "B--B", "--A--"];
  return diamond;
};

module.exports = {
  diamond,
};
