export const Square = ({ value, isPutStone, onClick, disabled }) => {
  return (
    <button
      className={isPutStone ? "put-square" : "square"}
      onClick={onClick}
      disabled={disabled}
    >
      <div
        className={value === "x" ? "player" : value === "o" ? "opponent" : null}
      ></div>
    </button>
  );
};
