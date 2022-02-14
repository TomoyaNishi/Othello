import React, { useEffect, useState } from "react";
import { Row } from "./row";
import { CreateBoard } from "./createOthello";

export const othello = new CreateBoard();

export const Board = () => {
  const rowArr = [0, 1, 2, 3, 4, 5];
  const player = "x";
  const opponent = "o";

  // 石が置ける場所をチェックする
  const putPositionArr = othello.putPosition(player);

  return (
    <div className="board">
      {rowArr.map((index) => {
        return (
          <Row
            key={index}
            array={rowArr}
            board={othello.board}
            row={rowArr[index]}
            isPutStone={putPositionArr}
          />
        );
      })}
    </div>
  );
};
