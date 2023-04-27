import { useReducer } from "react";
import { Board } from "./Board";
import { reducer, initialState } from "./state";
import "./styles.css";
import { GameResult, Player } from "./types";

function Game() {
  const [state, handleClick] = useReducer(reducer, initialState);

  let status;
  switch (state.result) {
    case GameResult.PENDING:
      status = "Next player: " + (state.nextPlayer === Player.X ? "X" : "O");
      break;
    case GameResult.TIE:
      status = "Tied!";
      break;
    case GameResult.X:
    case GameResult.O:
      status = "Winner: " + (state.result === GameResult.X ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board board={state.board} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
}

export default Game;
