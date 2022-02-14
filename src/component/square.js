import { othello } from "./board";
import { useEffect, useState } from "react";

export const Square = ({ value, isPutStone, putPosition }) => {
  const player = "x";

  const [state, setState] = useState(value);

  function clickButton() {
    othello.putStone(putPosition[0], putPosition[1], player);
    setState(othello.board[putPosition[0]][putPosition[1]]);
  }

  return (
    <button
      className={isPutStone ? "put-square" : "square"}
      onClick={clickButton}
    >
      {state}
    </button>
  );
};
