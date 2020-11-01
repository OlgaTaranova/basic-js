const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) == false) return false;
  let result = [];
  
  for (let name of members) {
    if (typeof name !== 'string') continue;
       for (let char of name) {
      if (char !== ' ') {
        result.push(char);
        break;
      }else continue; 
    }    
  }
  return result.join('').toUpperCase().split('').sort().join(''); 
};
