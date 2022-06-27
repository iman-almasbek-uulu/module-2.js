function isDivideBy(number, a, b) {
    let res;
    if (number % a === 0 && number % b === 0) {
      res = true;
    }else {
      res = false;
    }
    return res;
  }
  
  isDivideBy(12,2,2)