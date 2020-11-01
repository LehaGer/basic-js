const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr)){
    throw 'Error';
  }

  let isExist = false;
  let resultArr = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "--discard-next"){
      isExist = true
      for(let y = 0; y < arr.length; y++){
        if(y != i+1 && y != i){
          resultArr.push(arr[y]);
        }
      }
    }else if(arr[i] === "--discard-prev"){
      isExist = true
      for(let y = 0; y < arr.length; y++){
        if(y != i-1 && y != i){
          resultArr.push(arr[y]);
        }
      }
    }else if(arr[i] === "--double-next"){
      isExist = true
      for(let y = 0; y < arr.length; y++){
        if(y != i){
          resultArr.push(arr[y]);
          if(y == i+1){
            resultArr.push(arr[y]);
          }
        }
        
      }
    }else if(arr[i] === "--double-prev"){
      isExist = true
      for(let y = 0; y < arr.length; y++){
        if(y != i){
          resultArr.push(arr[y]);
          if(y == i-1){
            resultArr.push(arr[y]);
          }
        }
        
      }
    }
  }
  /*if(isExist == true){
    resultArr = transform(resultArr);
  }*/
  if (resultArr.length == 0) resultArr = arr;
  return resultArr;
};
