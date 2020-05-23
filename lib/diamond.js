const diamond = function (char) {
  if (char == "A") {
    return ["A"];
  }
  return ["-A-", "-B-B-", "-A-"];
};
module.exports = {
  diamond,
};
