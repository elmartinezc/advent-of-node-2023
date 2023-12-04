import { InputLoader } from "../inputfiles/InputLoader.js";

const inputData = InputLoader.loadChallengeInputAsArray(3);

const numberRegex = /(\d+)/dg;
const symbolRegex = /[^\d.]/;

const stringSectionContainsSymbol = (lineString, [lowIndex, highIndex]) => {
  if (lineString) {
    for (let i = lowIndex - 1; i < highIndex + 1; i++) {
      if (lineString[i] && lineString[i].match(symbolRegex)) {
        return true;
      }
    }
  }
  return false;
};

const result = inputData.reduce((prev, curr, index) => {
  const previous = inputData[index - 1];
  const next = inputData[index + 1];
  const numberMatches = curr.matchAll(numberRegex);
  let aggregatedNumbers = 0;
  for (const numberMatch of numberMatches) {
    const number = parseInt(numberMatch[1]);
    const [lowIndex, highIndex] = numberMatch.indices[0];
    const [prevChar, nextChar] = [curr[lowIndex - 1], curr[highIndex]];
    if (
      (prevChar && prevChar.match(symbolRegex)) ||
      (nextChar && nextChar.match(symbolRegex)) ||
      stringSectionContainsSymbol(previous, numberMatch.indices[0]) ||
      stringSectionContainsSymbol(next, numberMatch.indices[0])
    ) {
      aggregatedNumbers += number;
    }
  }
  return prev + aggregatedNumbers;
}, 0);

console.log("Part 1", result);
