const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let copy = [];
  let result = [];
  let discard_next_key = false;
 
  try {
      if (arr == false || Array.isArray(arr) == false) {
      throw new Error('The entered parameter is not an Array');
    }
  
  for (let item of arr) {
    copy.push(item);
  }
      
  for (let i = 0; i < copy.length; i++) {
    
    if (typeof copy[i] == 'string') {
      
      switch (copy[i]) {
          
        case '--discard-next': 
          if (!copy[i+1]) continue;
          discard_next_key = true;
          result.push(copy[i]);
          break;
          
        case  '--discard-prev':
          if (!result[result.length - 1]) continue;
          result.pop();
          result.push(copy[i]);
          break;
          
        case '--double-next':
          if (!copy[i+1]) continue;
          result.push(copy[i]);
          result.push(copy[i+1]);
          break;
          
        case '--double-prev':
          if (!result[result.length - 1]) continue;
          result.push(result[result.length - 1]);
          result.push(copy[i]);
          break;
      }
      
    }else if(discard_next_key) {
      discard_next_key = false;
      continue;
    }else {
      result.push(copy[i]);
    }
      
  }
    result.map(function(item, index) {
      if (typeof item == 'string') {
        result.splice(index, 1);
      }
    });
  return result;   
  }catch (err) {
    return err.message;
  } 
};

