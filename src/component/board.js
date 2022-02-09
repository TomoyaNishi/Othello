import React from "react";
import { Row } from "./row";
import { CreateBoard } from "./createOthello";
import { Square } from "./square";

export const Board = () => {
  const rowArr = [0, 1, 2, 3, 4, 5];
  const othello = new CreateBoard();
  const player = "x";
  const opponent = "o";

  // 石が置ける場所をチェックする
  const putPositionArr = othello.putPosition(player);
  console.log(putPositionArr);

  const board = rowArr.map((index) => {
    return (
      <Row
        key={index}
        array={rowArr}
        board={othello.board}
        row={rowArr[index]}
        isPutStone={putPositionArr}
      />
    );
  });

  return <div className="board">{board}</div>;
};
