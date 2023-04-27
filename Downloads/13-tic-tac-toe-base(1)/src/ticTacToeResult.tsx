import { SquareValue, GameResult, Board } from "./types";

const winningRows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export function ticTacToeResult(board: Board): GameResult {
  for (let i = 0; i < winningRows.length; i++) {
    const winningRow = winningRows[i];

    const potentialWinner = board[winningRow[0]];
    if (
      potentialWinner !== SquareValue.EMPTY &&
      potentialWinner === board[winningRow[1]] &&
      potentialWinner === board[winningRow[2]]
    ) {
      return (potentialWinner as number) as GameResult;
    }
  }
  // Check tie
  for (let i = 0; i < board.length; i++) {
    if (board[i] === SquareValue.EMPTY) {
      return GameResult.PENDING;
    }
  }
  return GameResult.TIE;
}
