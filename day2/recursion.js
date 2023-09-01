const rec = (val)=>{
    if(val <=0){ // Base case
        return 0
    }
    return val + rec(val-1) // Recursion
}



const factorial = (n)=>{
    if (n<=0){
        return 1
    }
    return n*factorial(n-1)
}

const fibbonacci = (n)=>{
    if(n<=0){
        return 0
    }
    if(n<=2){
        return 1
    }
    return fibbonacci(n-1) + fibbonacci(n-2)
}

const deepcopy = (val) => {
    if (typeof val !== 'object' || val === null) {
      // If the value is not an object or is null, return it as is
      return val;
    } else if (Array.isArray(val)) {
      // If it's an array, create a new array and recursively deep copy its elements
      const copiedArray = [];
      for (const item of val) {
        copiedArray.push(deepcopy(item));
      }
      return copiedArray;
    } else {
      // If it's an object, create a new object and recursively deep copy its properties
      const copiedObject = {};
      for (const key in val) {
        if (val.hasOwnProperty(key)) {
          copiedObject[key] = deepcopy(val[key]);
        }
      }
      return copiedObject;
    }
  };

  // How to solve deep copy in circular objects?

