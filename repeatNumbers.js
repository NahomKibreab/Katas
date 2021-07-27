const repeatNumbers = function(data) {
  // Put your solution here
  let result = [];
  for(let i = 0; i < data.length; i++){
    let numbers = '';
    for(let j = 0; j < data[i][1]; j++){
      numbers += data[i][0];
    }
   result.push(numbers);
  }
  return result.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));