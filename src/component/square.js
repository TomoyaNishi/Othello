export const Square = ({ value, isPutStone }) => {
  return (
    <button className={isPutStone ? "put-square" : "square"}>{value}</button>
  );
};
