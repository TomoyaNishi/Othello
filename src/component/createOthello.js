import { crossCheck } from "./crossCheck";

function example(putArr, checkPosition, i) {
  let _returnLength = 0;
  let opponentPutItem;

  if (checkPosition.length > _returnLength) {
    _returnLength = checkPosition.length;
    opponentPutItem = [[putArr[i][0], putArr[i][1]]];
  }
  console.log(opponentPutItem, _returnLength);

  return opponentPutItem;
}

export class CreateBoard {
  constructor() {
    this.board = Array.from(new Array(6), () =>
      new Array(6).fill(0).map(() => {
        return null;
      })
    );

    this.board[2][2] = "o";
    this.board[2][3] = "x";
    this.board[3][2] = "x";
    this.board[3][3] = "o";
  }

  putPosition(player) {
    const putList = [];
    this.board.forEach((colItem, colIndex) => {
      colItem.forEach((el, rowIndex) => {
        const checkPosition = this.checkStone(colIndex, rowIndex, player);

        if (checkPosition.length === 0) {
          return;
        }

        putList.push([colIndex, rowIndex]);
      });
    });
    return putList;
  }

  selectPutPosition(opponent) {
    const opponentPutArr = this.putPosition(opponent);
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

    const arrPosition = [];
    let _returnLength = 0;
    let opponentPutItem;

    // 角に石があったら
    angle.forEach((el) => {
      for (let i = 0; i < opponentPutArr.length; i++) {
        if (el.toString() === opponentPutArr[i].toString()) {
          arrPosition.push(el);
        }
      }
    });

    if (arrPosition.length !== 0) {
      for (let i = 0; i < arrPosition.length; i++) {
        const checkPosition = this.checkStone(
          arrPosition[i][0],
          arrPosition[i][1],
          opponent
        );

        if (checkPosition.length > _returnLength) {
          _returnLength = checkPosition.length;
          opponentPutItem = [arrPosition[i][0], arrPosition[i][1]];
        }
        // console.log(opponentPutItem, _returnLength);
      }
      return opponentPutItem;
    }

    // できるだけ角に置かれないように
    angleAdjacent.forEach((el) => {
      for (let i = 0; i < opponentPutArr.length; i++) {
        if (el.toString() !== opponentPutArr[i].toString()) {
          arrPosition.push(opponentPutArr[i]);
        }
      }
    });

    const setPutPosition = new Set(arrPosition);
    const setPutPositionArr = Array.from(setPutPosition);

    if (setPutPositionArr.length !== 0) {
      for (let i = 0; i < setPutPositionArr.length; i++) {
        const checkPosition = this.checkStone(
          setPutPositionArr[i][0],
          setPutPositionArr[i][1],
          opponent
        );

        if (checkPosition.length > _returnLength) {
          _returnLength = checkPosition.length;
          opponentPutItem = [setPutPositionArr[i][0], setPutPositionArr[i][1]];
        }
        // console.log(opponentPutItem, _returnLength);
      }
      return opponentPutItem;
    }

    // そのほかの石
    for (let i = 0; i < arrPosition.length; i++) {
      const checkPosition = this.checkStone(
        arrPosition[i][0],
        arrPosition[i][1],
        opponent
      );

      if (checkPosition.length > _returnLength) {
        _returnLength = checkPosition.length;
        opponentPutItem = [arrPosition[i][0], arrPosition[i][1]];
      }
      // console.log(opponentPutItem, _returnLength);
    }
    return opponentPutItem;
  }

  putStone(yIndex, xIndex, player) {
    // 被っていないか
    if (this.board[yIndex][xIndex]) {
      console.log("すでに石が置いてあります");
      return;
    }

    //判定
    const willBeReturned = this.checkStone(yIndex, xIndex, player);
    if (willBeReturned.length === 0) {
      console.log("石を置けません");
      return;
    }

    // 問題なければ石を置く
    this.board[yIndex][xIndex] = player;

    // 置いた石との間にある石を返す
    for (let i = 0, l = willBeReturned.length; i < l; i++) {
      this.board[willBeReturned[i][0]][willBeReturned[i][1]] = player;
    }
    return true;
  }

  checkStone(yIndex, xIndex, player) {
    const directions = [
      [0, 1], // 右
      [0, -1], // 左
      [-1, 0], // 上
      [1, 0], // 下
      [-1, -1], // 左上
      [1, 1], // 左下
      [-1, 1], // 右上
      [1, -1], // 右下
    ];

    const change = [];
    directions.forEach((el) => {
      const result = crossCheck(
        this.board,
        { yIndex, xIndex },
        el[0],
        el[1],
        player
      );
      change.push(...result);
    });
    return change;
  }
}
