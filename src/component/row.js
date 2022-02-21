import { Square } from "./square";

export const Row = ({ array, board, row, isPutStone, onClick }) => {
  return (
    <div className="row">
      {array.map((index) => {
        let isPut;

        for (const el of isPutStone) {
          isPut = el[0] === row && el[1] === index;
          if (isPut) break;
        }

        return (
          <Square
            key={index}
            value={board[row][index]}
            isPutStone={isPut}
            putPosition={[row, index]}
            onClick={() => onClick(row, index)}
          />
        );
      })}
    </div>
  );
};
