const generateBoard = (whiteQ, blackQ) => {
  const board = cheeseBoard();
  board[whiteQ[0]][whiteQ[1]] = 1;
  board[blackQ[0]][blackQ[1]] = 1;
  return board;
};

const cheeseBoard = () => {
  const board = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[j] === undefined) {
        board[j] = [0];
      } else {
        board[j].push(0);
      }
    }
  }
  return board;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
//console.log(queenThreat(generatedBoard));
