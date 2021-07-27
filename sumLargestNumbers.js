const sumLargestNumbers = function(data) {
  // Put your solution here
  let larger = 0, largest = 0;
  for(let item of data){
    if(item > largest){
      larger = largest;
      largest = item;
    }
    
  }
  return larger + largest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));