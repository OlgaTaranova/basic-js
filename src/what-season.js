const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!(date instanceof Date)) return false;
  let month = date.getMonth();
  if (month == 0 || month == 1 || month == 11) return "winter";
  if (month > 1 && month < 5) return "spring";
  if (month > 4 && month < 8) return "summer";
  if (month > 7 && month < 11) return "autumn (fall)";
};
