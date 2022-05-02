export const selectPosition = (arrPosition, opponent, checkStone, board) => {
  let _returnLength = 0;
  let opponentPutItem;

  for (let i = 0; i < arrPosition.length; i++) {
    const checkPosition = checkStone(
      arrPosition[i][0],
      arrPosition[i][1],
      opponent,
      board
    );

    if (checkPosition.length > _returnLength) {
      _returnLength = checkPosition.length;
      opponentPutItem = [arrPosition[i][0], arrPosition[i][1]];
    }
  }
  return opponentPutItem;
};
