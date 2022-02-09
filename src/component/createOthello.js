import { crossCheck } from "./crossCheck";

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
    this.board.forEach((row, rowIndex) => {
      row.forEach((el, colIndex) => {
        const checkPosition = this.checkStone(rowIndex, colIndex, player);

        if (checkPosition.length === 0) {
          return;
        }
        putList.push([rowIndex, colIndex]);
        console.log(checkPosition.length, rowIndex, colIndex);
      });
    });
    return putList;
  }

  putStone(num1, num2, player) {
    // 被っていないか
    if (this.board[num1][num2]) {
      console.log("すでに石が置いてあります");
      return;
    }

    //判定
    const willBeReturned = this.checkStone(num1, num2, player);
    if (willBeReturned.length === 0) {
      console.log("石を置けません");
      return;
    }

    // 問題なければ石を置く
    this.board[num1][num2] = player;

    // 置いた石との間にある石を返す
    for (let i = 0, l = willBeReturned.length; i < l; i++) {
      this.board[willBeReturned[i][0]][willBeReturned[i][1]] = player;
    }
  }

  checkStone(num1, num2, player) {
    const change = [];
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

    directions.forEach((el) => {
      crossCheck(this.board, { num1, num2 }, el[0], el[1], player, change);
    });

    return change;
  }
}
//
//   function playGame() {
//     const othelloBoard = new Board();
//     const player = "x";
//     const opponent = "o";
//
//     // 石が置ける場所をチェックする
//     const putPositionArr = othelloBoard.putPosition(player);
//     console.log(putPositionArr);
//
//     othelloBoard.putStone(2, 1, player);
//     console.log(othelloBoard.board);
//   }
//
//   playGame();
