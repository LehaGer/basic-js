const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if(date === undefined) return 'Unable to determine the time of year!';

  if(date instanceof Date){

    let result = "";
    let month = date.getMonth();

    if(typeof month === 'number' && month <= 11 && month >= 0 && month%1 === 0){
      
      if((month >= 0 && month <= 1) || month == 11){
        result = "winter";
      }else if(month >= 2 && month <= 4){
        result = "spring";
      }else if(month >= 5 && month <=7 ){
        result = "summer"
      }else if(month >= 8 && month <= 10){
        result = "autumn"
      }

      return result;
    }else{
      return false
    }

  }else {

    throw new CustomError('Error');

  }
};
