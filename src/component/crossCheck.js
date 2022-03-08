export const crossCheck = (
  board,
  currentPosition,
  yAxis,
  xAxis,
  player,
  change
) => {
  if (
    currentPosition.num1 + yAxis > 5 ||
    currentPosition.num1 + yAxis < 0 ||
    currentPosition.num2 + xAxis > 5 ||
    currentPosition.num2 + xAxis < 0
  ) {
    return;
  }

  const nextPosition =
    board[currentPosition.num1 + yAxis][currentPosition.num2 + xAxis];

  if (!nextPosition || board[currentPosition.num1][currentPosition.num2]) {
    return;
  }

  let _yAxis = yAxis;
  let _xAxis = xAxis;
  // チェックする方向に置いた石と違う石があれば繰り返し処理をする
  while (
    board[currentPosition.num1 + _yAxis][currentPosition.num2 + _xAxis] !==
    player
  ) {
    if (currentPosition.num2 + _xAxis === 0) {
      console.log({
        board,
        isNextPlayer:
          board[currentPosition.num1 + _yAxis][
            currentPosition.num2 + _xAxis
          ] === player,
        isNextNull:
          board[currentPosition.num1 + _yAxis][currentPosition.num2 + _xAxis] ==
          null,
        arg1: currentPosition.num1 + _yAxis,
        arg2: currentPosition.num2 + _xAxis,
        player,
      });
    }
    // console.log(_yAxis, _xAxis);
    // console.log({
    //   board,
    //   c1:
    //     board[currentPosition.num1 + _yAxis][currentPosition.num2 + _xAxis] ===
    //     player,
    //   c2:
    //     board[currentPosition.num1 + _yAxis][currentPosition.num2 + _xAxis] ==
    //     null,
    //   arg1: currentPosition.num1 + _yAxis,
    //   arg2: currentPosition.num2 + _xAxis,
    //   player,
    // });
    if (
      board[currentPosition.num1 + _yAxis][currentPosition.num2 + _xAxis] ===
      player
    ) {
      // 置いた石と同じものがあるところまで処理を繰り返す
      return;
    }

    // チェックしていきnullにぶつかったら配列を空にする
    if (
      board[currentPosition.num1 + _yAxis][currentPosition.num2 + _xAxis] ==
      null
    ) {
      change.splice(0);
      return;
    }

    change.push([currentPosition.num1 + _yAxis, currentPosition.num2 + _xAxis]);

    _yAxis += yAxis;
    _xAxis += xAxis;

    if (
      board.length <= currentPosition.num1 + _yAxis ||
      board.length <= currentPosition.num2 + _xAxis
    ) {
      break;
    }
  }
};
