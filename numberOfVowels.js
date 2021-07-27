const numberOfVowels = function(data) {
  // Put your solution here
  let counter = 0;
  for(let char of data){
    if (char.toLowerCase() === 'a' || 
        char.toLowerCase() === 'i' || 
        char.toLowerCase() === 'e' ||
        char.toLowerCase() === 'o' ||
        char.toLowerCase() === 'u'){
          counter++;
        }
  }
  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));