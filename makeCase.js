const makeCase = function(input, caseStyle) {
  // Put your solution here
  if(caseStyle && typeof caseStyle !== 'object'){
    switch(caseStyle){
      case 'camel':
        return  camelCase(input);
      case 'pascal':
        return pascal(input);
      case 'snake':
        return snake(input);
      case 'kebab':
        return kebab(input);
      case 'title':
        return title(input);
      case 'vowel':
        return vowel(input);
      case 'consonant':
        return consonant(input);
      case 'upper':
        return upper(input);
      case 'lower':
        return lower(input);
    }
  } else {
    return processLists(input,caseStyle);
  }
};

const processLists = function(input, caseStyle){
  let data = input;
  let sortedStyles = caseStyle.sort((a,b)=>{
    let valueA = 0, valueB = 0;
    for(let style of castingSyles){
      if(style.styles.includes(a)){
        valueA = style.value;
      } 
      if(style.styles.includes(b)){
        valueB = style.value;
      }
    }
    return valueB - valueA;
  })
  
  for(let style of sortedStyles){
    data = makeCase(data, style);
  }
  return data;
};

const castingSyles = [
  {
    styles:['camel','pascal','snake','kebab','title'],
    value:1
  },{
    styles:['vowel','consonant'],
    value:2
  },{
    styles:['upper','lower'],
    value:3
  }
]

const camelCase = function(input) {
  let words = splitter(input);
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
          word += words[i][j].toLowerCase();
        }
      }
      results += word;
    }    
  }
  return results;
};

const pascal = function(input) {
  let words = splitter(input);
  let results = ''
  for(let i = 0; i < words.length; i++){
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
  return results;
};

const snake = function(input) {
  let words = splitter(input);
  return words.join('_');
};
const kebab = function(input) {
  let words = splitter(input);
  return words.join('-');
};

const title = function(input){
  let words = splitter(input);
  let results = [];
  for(let i = 0; i < words.length; i++){
    let word = '';
    for(let j = 0; j < words[i].length; j++){
      if(j === 0){
        word += words[i][j].toUpperCase();
      } else {
        word += words[i][j];
      }
    }
    results.push(word);     
 }
 return results.join(' ');
};

const vowel = function(input){
  let words = splitter(input);
  let results = [];
  for(let i = 0; i < words.length; i++){
    let char = '';
    for(let j = 0; j < words[i].length; j++){
      if(words[i][j] === 'a' || words[i][j] === 'e' || words[i][j] === 'i' || words[i][j] === 'o' || words[i][j] === 'u'
      || words[i][j] === 'A' || words[i][j] === 'E' || words[i][j] === 'I' || words[i][j] === 'O' || words[i][j] === 'U'){
        char += words[i][j].toUpperCase();
      } else {
        char += words[i][j].toLowerCase();
      }
    }
    results.push(char);     
 }
 return results.join(' ');
};

const consonant = function(input){
  let words = splitter(input);
    let results = [];
    for(let i = 0; i < words.length; i++){
      let char = '';
      for(let j = 0; j < words[i].length; j++){
        if(words[i][j] !== 'a' && words[i][j] !== 'e' && words[i][j] !== 'i' && words[i][j] !== 'o' && words[i][j] !== 'u'
          && words[i][j] !== 'A' && words[i][j] !== 'E' && words[i][j] !== 'I' && words[i][j] !== 'O' && words[i][j] !== 'U'){
          char += words[i][j].toUpperCase();
        } else {
          char += words[i][j].toLowerCase();
        }
      }
      results.push(char);     
   }
   return results.join(' ');
  };

const upper = function(input){
  return input.toUpperCase();
};

const lower = function(input){
  return input.toLowerCase();
};

const splitter = function(input){
  let words = '';
  if(input.includes(' ')){
    words = input.split(' ');
  } else if(input.includes('_')){
    words = input.split('_');
  } else if(input.includes('-')){
    words = input.split('-');
  }
  return words;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));