export const crossCheck = (board, currentPosition, yAxis, xAxis, player) => {
  const change = [];
  if (
    currentPosition.yIndex + yAxis > 5 ||
    currentPosition.yIndex + yAxis < 0 ||
    currentPosition.xIndex + xAxis > 5 ||
    currentPosition.xIndex + xAxis < 0
  ) {
    return change;
  }

  const nextPosition =
    board[currentPosition.yIndex + yAxis][currentPosition.xIndex + xAxis];

  if (!nextPosition || board[currentPosition.yIndex][currentPosition.xIndex]) {
    return change;
  }

  let _yAxis = yAxis;
  let _xAxis = xAxis;
  const total = [];
  // チェックする方向に置いた石と違う石があれば繰り返し処理をする
  while (
    board[currentPosition.yIndex + _yAxis][currentPosition.xIndex + _xAxis] !==
    player
  ) {
    if (
      board[currentPosition.yIndex + _yAxis][
        currentPosition.xIndex + _xAxis
      ] === player ||
      board[currentPosition.yIndex + _yAxis][currentPosition.xIndex + _xAxis] ==
        null
    ) {
      total.splice(0);
      return total;
    }

    // // 置いた時に返る石を追加
    total.push([
      currentPosition.yIndex + _yAxis,
      currentPosition.xIndex + _xAxis,
    ]);

    _yAxis += yAxis;
    _xAxis += xAxis;

    if (
      board.length <= currentPosition.yIndex + _yAxis ||
      currentPosition.yIndex + _yAxis < 0 ||
      board.length <= currentPosition.xIndex + _xAxis
    ) {
      total.splice(0);
      return total;
    }
  }
  change.push(...total);
  return change;
};
