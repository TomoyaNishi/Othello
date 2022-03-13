export const crossCheck = (
  board,
  currentPosition,
  yAxis,
  xAxis,
  player,
  change
) => {
  if (
    currentPosition.yIndex + yAxis > 5 ||
    currentPosition.yIndex + yAxis < 0 ||
    currentPosition.xIndex + xAxis > 5 ||
    currentPosition.xIndex + xAxis < 0
  ) {
    return;
  }

  const nextPosition =
    board[currentPosition.yIndex + yAxis][currentPosition.xIndex + xAxis];

  if (!nextPosition || board[currentPosition.yIndex][currentPosition.xIndex]) {
    return;
  }

  let _yAxis = yAxis;
  let _xAxis = xAxis;
  // チェックする方向に置いた石と違う石があれば繰り返し処理をする
  while (
    board[currentPosition.yIndex + _yAxis][currentPosition.xIndex + _xAxis] !==
    player
  ) {
    if (
      board[currentPosition.yIndex + _yAxis][
        currentPosition.xIndex + _xAxis
      ] === player
    ) {
      return;
    }

    // console.log({
    //   _y: currentPosition.yIndex,
    //   _x: currentPosition.xIndex,
    //   change,
    //   yAxis,
    //   xAxis,
    //   _yAxis,
    //   _xAxis,
    // });

    if (
      board[currentPosition.yIndex + _yAxis][currentPosition.xIndex + _xAxis] ==
      null
    ) {
      change.splice(0);
      return;
    }

    // 置いた時に返る石を追加
    change.push([
      currentPosition.yIndex + _yAxis,
      currentPosition.xIndex + _xAxis,
    ]);

    console.log({
      _y: currentPosition.yIndex,
      _x: currentPosition.xIndex,
      change,
      yAxis,
      xAxis,
    });

    _yAxis += yAxis;
    _xAxis += xAxis;

    if (
      board.length <= currentPosition.yIndex + _yAxis ||
      currentPosition.yIndex + _yAxis <= 0 ||
      board.length <= currentPosition.xIndex + _xAxis ||
      currentPosition.xIndex + _xAxis <= 0
    ) {
      return;
    }
    // console.log(change);
  }
};
