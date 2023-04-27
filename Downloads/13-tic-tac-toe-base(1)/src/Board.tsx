import { Board as BoardArray, SquareValue } from "./types";

interface SquareProps {
  onClick: () => void;
  value: SquareValue;
}

function Square({ onClick, value }: SquareProps) {
  return (
    <button className="square" onClick={onClick}>
      {value === SquareValue.X ? "X" : value === SquareValue.O ? "O" : ""}
    </button>
  );
}

interface BoardProps {
  board: BoardArray;
  onClick: (square: number) => void;
}

export function Board({ board, onClick }: BoardProps) {
  function renderSquare(i: number) {
    return <Square value={board[i]} onClick={() => onClick(i)} />;
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
