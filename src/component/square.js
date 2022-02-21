export const Square = ({ value, isPutStone, onClick }) => {
  return (
    <button className={isPutStone ? "put-square" : "square"} onClick={onClick}>
      {value}
    </button>
  );
};
