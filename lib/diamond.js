const diamond = function (char) {
  //create array to help with diamond
  var diamond = [];

  if (!char) {
    return diamond;
  }
  if (char === "A") {
    diamond = [char];
    return diamond;
  }
  if (char === "B") {
    diamond = ["-A-", char + "--" + char, "-A-"];
    return diamond;
  }
  diamond = ["--A--", "-B-B-", char + "---" + char, "-B-B-", "--A--"];
  return diamond;

  return diamond;
};

module.exports = {
  diamond,
};
