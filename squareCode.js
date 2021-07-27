const squareCode = function (message) {
  // Put your solution here
  const noSpace = message.split(" ").join("");
  const wordLength = noSpace.length;
  const columnNumber = Math.ceil(Math.sqrt(wordLength));
  const data = splitter(noSpace, columnNumber);
  const result = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (result[j] === undefined) {
        result[j] = data[i][j];
      } else {
        result[j] += data[i][j];
      }
    }
  }
  return result.join(" ");
};

// this split letter base the given number
const splitter = (word, num) => {
  let characters = word.split("");
  const result = [];
  while (characters.length > 0) {
    result.push(characters.splice(0, num));
  }
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
