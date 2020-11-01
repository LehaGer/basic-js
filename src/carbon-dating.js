const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(sampleActivity && (typeof sampleActivity === 'string')) {
    
    let samplActNum = parseFloat(sampleActivity);
    let timesCount = 0;

    if( isNaN(samplActNum)){
      return false;
    }

    if((typeof samplActNum === 'number') || samplActNum <= 0 || samplActNum > HALF_LIFE_PERIOD || !Number.isInteger(samplActNum)) return false;
    
    timesCount = MODERN_ACTIVITY / (2 * samplActNum)

    return Math.ceil(timesCount * HALF_LIFE_PERIOD)

  }else{

    return false;

  }
};
