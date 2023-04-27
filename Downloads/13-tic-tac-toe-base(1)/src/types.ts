export enum SquareValue {
  EMPTY = 0,
  X = 1,
  O = 2
}

export enum GameResult {
  PENDING = 0,
  X = 1,
  O = 2,
  TIE = 3
}

export enum Player {
  X = 1,
  O = 2
}

export type Board = Array<SquareValue>;

export interface State {
  board: Board;
  result: GameResult;
  nextPlayer: Player;
}
