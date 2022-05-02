const angle = [
  [0, 0],
  [0, 5],
  [5, 0],
  [5, 5],
];

const angleAdjacent = [
  [0, 1],
  [1, 0],
  [1, 1],
  [0, 4],
  [1, 4],
  [1, 5],
  [4, 0],
  [4, 1],
  [5, 1],
  [4, 4],
  [4, 5],
  [5, 5],
];

// 一致した時
function someElement(arr, opponentPutArr) {
  return checkPosition(arr, opponentPutArr, true);
}

// 一致していない時
function differentElement(arr, opponentPutArr) {
  return checkPosition(arr, opponentPutArr, false);
}

// 石が置ける場所をチェック
function checkPosition(positionArr, opponentPutArr, match) {
  const _result = [];
  positionArr.forEach((el) => {
    for (let i = 0; i < opponentPutArr.length; i++) {
      const a = el.toString() === opponentPutArr[i].toString();
      console.log(a, opponentPutArr[i]);
      if (a === match) {
        console.log(opponentPutArr[i].toString());
        _result.push(opponentPutArr[i]);
      }
    }
  });

  const _putArr = _result.filter((x, i, self) => {
    return self.indexOf(x) === i && i !== self.lastIndexOf(x);
  });

  // console.log(_putArr);
  return _putArr;
}

export const opponentSelect = (opponent, opponentPutArr) => {
  const anglePutArr = someElement(angle, opponentPutArr);

  if (anglePutArr.length !== 0) {
    return anglePutArr;
  }

  const notAngleAdjacent = differentElement(angleAdjacent, opponentPutArr);
  console.log(opponentPutArr);
  console.log(notAngleAdjacent);
  if (notAngleAdjacent.length !== 0) {
    return notAngleAdjacent;
  }

  return opponentPutArr;
};
