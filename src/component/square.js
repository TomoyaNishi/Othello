export const Square = ({ value, isPutStone, onClick }) => {
  return (
    <button className={isPutStone ? "put-square" : "square"} onClick={onClick}>
      <div
        className={value === "x" ? "player" : value === "o" ? "opponent" : null}
      ></div>
    </button>
  );
};
