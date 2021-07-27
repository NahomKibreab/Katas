const urlEncode = function(text) {
  // Put your solution here
  let words = text.trim();
  let updatedWords = '';
  for(let i = 0; i < words.length; i++){
    if(words[i] === ' '){
      updatedWords += '%20';
    } else {
      updatedWords += words[i];
    }
  }
  return updatedWords;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));