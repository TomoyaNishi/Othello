export const Result = (playerLength, opponentLength) => {
  let result = "";
  if (playerLength > opponentLength) {
    result = "win";
  } else if (playerLength < opponentLength) {
    result = "lose";
  } else {
    result = "draw";
  }
  return result;
};
