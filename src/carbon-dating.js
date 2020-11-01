const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" || sampleActivity === false) return false;
    if (+sampleActivity <= 0 || +sampleActivity > 15) return false;
    if (isNaN(sampleActivity)) return false;
  
    let reactionRate = Math.log(2)/HALF_LIFE_PERIOD;
    let elapsedTime = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / reactionRate);
 
    return elapsedTime;
};
