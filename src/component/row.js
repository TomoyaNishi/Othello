import { Square } from "./square";

export const Row = ({ array, board, row, isPutStone }) => {
  let isPut;

  const rowItem = array.map((index) => {
    isPutStone.map((value) => {
      console.log(value, [row, index]);
      isPut = value === [row, index];
    });

    return <Square key={index} value={board[row][index]} isPutStone={isPut} />;
  });

  return <div className="row">{rowItem}</div>;
};
