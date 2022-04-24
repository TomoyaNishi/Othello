export const returnLength = (putArr, opponent) => {
  let returnLength = 0;
  let opponentPutItem;

  for (let i = 0; i < putArr.length; i++) {
    const checkPosition = this.checkStone(putArr[i][0], putArr[i][1], opponent);

    // console.log(checkPosition);
    if (checkPosition.length > returnLength) {
      returnLength = checkPosition.length;
      opponentPutItem = [[putArr[i][0], putArr[i][1]]];
    }

    console.log(opponentPutItem, returnLength);
  }
};
