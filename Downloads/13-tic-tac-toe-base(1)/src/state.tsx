import { GameResult, State, Player, SquareValue, Board } from "./types";

declare global {
  var ticTacToeResult: (board: Board) => GameResult
}

export const initialState: State = {
  board: Array(9).fill(0),
  result: GameResult.PENDING,
  nextPlayer: Player.X
};

export function reducer(state: State, selectedCell: number) {
  if (state.result !== GameResult.PENDING) {
    // Reset game.
    state = initialState;
  }
  if (state.board[selectedCell] !== SquareValue.EMPTY) {
    return state;
  }

  const board = state.board.map((square, index) =>
    index === selectedCell
      ? ((state.nextPlayer as number) as SquareValue)
      : square
  );

  const result = ticTacToeResult(board);
  const nextPlayer = state.nextPlayer !== Player.X ? Player.X : Player.O;
  return {
    board,
    result,
    nextPlayer
  };
}
