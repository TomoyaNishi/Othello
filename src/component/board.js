import React, { useState } from "react";
import { Row } from "./row";
import { CreateBoard } from "./createOthello";
import { Result } from "../utils/result";
import { opponentSelect } from "../utils/opponentSelect";
import { selectPosition } from "../utils/SelectPosition";

const othello = new CreateBoard();
export const Board = () => {
  const [othelloBoard, setOthelloBoard] = useState(othello.board);
  const [isDisabled, setIsDisabled] = useState(false);
  const rowArr = [0, 1, 2, 3, 4, 5];
  const player = "x";
  const opponent = "o";

  // 石が置ける場所をチェックする
  const putPositionArr = othello.isPutPosition(player);

  // 1000ms待つ処理
  function wait() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  }

  const flatOthelloBoard = othelloBoard.flat(2);
  let playerLength = flatOthelloBoard.filter((n) => n === player).length;
  let opponentLength = flatOthelloBoard.filter((n) => n === opponent).length;

  async function clickSquare(row, index) {
    const isPut = othello.putStone(row, index, player);

    const newArray = [...othelloBoard];
    setOthelloBoard(newArray);

    if (!isPut) {
      return;
    }
    setIsDisabled(true);

    await wait();

    const opponentPutArr = othello.isPutPosition(opponent);

    const putPosition = opponentSelect(opponent, opponentPutArr);
    console.log(putPosition);

    const select = selectPosition(
      putPosition,
      opponent,
      othello.checkStone,
      othello.board
    );

    setIsDisabled(false);
    othello.putStone(select[0], select[1], opponent);
    const _newArray = [...othelloBoard];
    setOthelloBoard(_newArray);
  }
  // 結果の判定
  let result = Result(playerLength, opponentLength);

  return (
    <div className="container">
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
              disabled={isDisabled}
            />
          );
        })}
      </div>
      <div className="othello-state">
        <div className="result-state">
          <p className="player-icon"></p>
          <p>{playerLength}</p>
        </div>
        <div className="result-state">
          <p className="opponent-icon"></p>
          <p>{opponentLength}</p>
        </div>
        {putPositionArr.length === 0 ? (
          <p className="result">your{result}️</p>
        ) : null}
      </div>
    </div>
  );
};
