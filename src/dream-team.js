const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  let result = '';
  let tempArray = [];

  if(!Array.isArray(members)) return false

  for(let i = 0; i <  members.length; i++){
      if(typeof members[i] === 'string'){
        tempArray.push(members[i].trim().charAt(0).toUpperCase()); 
      }
  }
  tempArray.sort();
  for(let i = 0; i < tempArray.length; i++){
    result += tempArray[i];
  }

  if (result === '') return false;
  return result;

};
