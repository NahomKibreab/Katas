const conditionalSum = function(values, condition) {
  // Your code here
  let counter = 0;
  switch(condition){
    case 'even':
      values.forEach(function(value){
        if(value % 2 === 0){
          counter += value;
        }
      })
      return counter;
    case 'odd':
      values.forEach(function(value){
        if(value % 2 !== 0){
          counter += value;
        }
      })
      return counter;
    default:
      return 0;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));