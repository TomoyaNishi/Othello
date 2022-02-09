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

  if (!nextPosition) {
    return;
  }

  let _yAxis = yAxis;
  let _xAxis = xAxis;

  // チェックする方向に置いた石と違う石があれば繰り返し処理をする
  while (
    board[currentPosition.num1 + _yAxis][currentPosition.num2 + _xAxis] !==
    player
  ) {
    // 置いた石と同じものがあるところまで処理を繰り返す
    if (
      board[currentPosition.num1 + _yAxis][currentPosition.num2 + _xAxis] ===
      player
    ) {
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
  }
};
