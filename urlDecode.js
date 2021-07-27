const urlDecode = function(text) {
  // Put your solution here
  return keyValueCreator(splitter(text));
};

const splitter = function(input){
  let data = [];
  
  if(input.includes('=')){
    data = input.split('=')
  }
  data.forEach((element,index) =>{
    if(element.includes('&')){
      data.splice(index, 1, element.split('&'));
    }
    if(element.includes('%20')){
      data.splice(index, 1, element.split('%20').join(' '));
    }
  });
  return data.flat();
};

const keyValueCreator = function(data){
  let decode = {};
  let key;
  data.map((item,index)=>{
    if(index % 2 === 0){
      key = item;
    } else {
      decode[key]= item;
    }
  });
  return decode;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);