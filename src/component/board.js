import React, { useEffect, useState } from "react";
import { Row } from "./row";
import { CreateBoard } from "./createOthello";

export const othello = new CreateBoard();

export const Board = () => {
  const [othelloBoard, setOthelloBoard] = useState(othello.board);
  const [player, setPlayer] = useState("x");
  const rowArr = [0, 1, 2, 3, 4, 5];
  // const player = "x";
  // const opponent = "o";

  // 石が置ける場所をチェックする
  const putPositionArr = othello.putPosition(player);

  function clickSquare(row, index) {
    const isPut = othello.putStone(row, index, player);

    const newArray = [...othelloBoard];
    setOthelloBoard(newArray);

    if (!isPut) {
      return;
    }

    player === "x" ? setPlayer("o") : setPlayer("x");
  }
  return (
    <div className="board">
      {rowArr.map((index) => {
        return (
          <Row
            key={index}
            array={rowArr}
            board={othelloBoard}
            row={rowArr[index]}
            isPutStone={putPositionArr}
            onClick={clickSquare}
          />
        );
      })}
    </div>
  );
};
