let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let board = [];

let queenThreat = function() {
// indicate whether or not the two queens are positioned so that they attack each other.
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1] || (whiteQueen[0] + whiteQueen[1]) === (blackQueen[0] + blackQueen[1]) || Math.abs(whiteQueen[0] - whiteQueen[1]) === Math.abs(blackQueen[0] - blackQueen[1])) { //in the same column or row or diagonally able to attack
    return true;
  } else {
    return false;
  }
};

let generateBoard = function(whiteQueen, blackQueen) {
// return a nested array representing the board, containing the location of two queens.
  const gridSize = 8;
  for (i = 0; i < gridSize; i++) {
    board.push([]);
    for (j = 0; j < gridSize; j++) {
      if ((whiteQueen[0] === j && whiteQueen[1] === i) || (blackQueen[0] === j && blackQueen[1] === i)) {
        board[i].push(1);
      } else {
        board[i].push(0);
      }
    }
  }
return board;
}; 

let generatedBoard = generateBoard(whiteQueen, blackQueen);

//console.table(generatedBoard);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));