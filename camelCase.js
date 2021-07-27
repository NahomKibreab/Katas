const camelCase = function(input) {
  // Your code here
  let words = input.split(' ');
  let results = ''
  for(let i = 0; i < words.length; i++){
    if(i === 0){
      results += words[i];
    } else {
      let word = '';
      for(let j = 0; j < words[i].length; j++){
        if(j === 0){
          word += words[i][j].toUpperCase();
        } else {
          word += words[i][j];
        }
      }
      results += word;
    }    
  }
  return results;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));