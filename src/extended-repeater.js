const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
   
  let string = (typeof str == 'string') ? str : String(str);
  let addition;
  let separator;
  let additionSeparator;
  
  
  if ('addition' in options) {
    addition = (typeof options.addition == 'string') ? options.addition : String(options.addition);
  }else {
    addition = '';
  }
  
  if ('separator' in options) {
    separator = (typeof options.separator == 'string') ? options.separator :           String(options.separator);
  }else {
    addition = '+';
  }
  
  if ('additionSeparator' in options) {
    additionSeparator = (typeof options.additionSeparator == 'string') ? options.additionSeparator : String(options.additionSeparator);
  }else {
    additionSeparator = '|';
  }
  
  let repeatTimes = ('repeatTimes' in options) ? options.repeatTimes : 1;
  let additionRepeatTimes = ('additionRepeatTimes' in options) ? options.additionRepeatTimes : 1;
  
  let result = '';
  
  for (let i = 1; i < repeatTimes; i++) {
    result += string + getAddition() + separator;
  }
  return result + string + getAddition();
    
  function getAddition() {
    let additionString = '';
   
      for (let i = 1; i < additionRepeatTimes; i++) {
      additionString += addition + additionSeparator;
    }
      return additionString + addition;
    }
};