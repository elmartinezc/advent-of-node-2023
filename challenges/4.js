import { InputLoader } from "../inputfiles/InputLoader.js";

const inputData = InputLoader.loadChallengeInputAsArray(4);

const splitInputLine = (inputLine) => {
  const [_, scratchcard] = inputLine.split(":");
  const [winningNumbers, pickedNumbers] = scratchcard.split("|");
  return {
    winningNumbers: winningNumbers.split(" ").filter((n) => n !== ""),
    pickedNumbers: pickedNumbers.split(" ").filter((n) => n !== ""),
  };
};

const cardCounts = Array(inputData.length).fill(1);

const result = inputData.reduce((prev, curr, cardNumber) => {
  const { winningNumbers, pickedNumbers } = splitInputLine(curr);
  let score = 0;
  const matchCount = pickedNumbers.filter((n) => winningNumbers.includes(n)).length;
  score = matchCount === 1 ? 1 : matchCount > 1 ? Math.pow(2, matchCount - 1) : 0;

  for (let i = 1; i <= cardCounts[cardNumber]; i++) {
    for (let i = 1; i <= matchCount; i++) {
      if (cardCounts[cardNumber + i]) {
        cardCounts[cardNumber + i] += 1;
      }
    }
  }
  return prev + score;
}, 0);

console.log("Part 1: ", result);
console.log(
  "Part 2: ",
  cardCounts.reduce((prev, curr) => prev + curr, 0),
);
