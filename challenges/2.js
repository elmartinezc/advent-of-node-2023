import { InputLoader } from "../inputfiles/InputLoader.js";

const inputData = InputLoader.loadChallengeInputAsArray(2);
const colorLimits = { red: 12, green: 13, blue: 14 };
const gameRegExp = /Game (\d+)/;

const result = inputData.reduce(
  (prev, curr) => {
    const gameNumber = curr.match(gameRegExp)[1];
    let invalidRound = false;
    const colorHighestDiceValues = [];
    for (const color of Object.keys(colorLimits)) {
      let biggestDiceCountForNumber = 0;
      const regExp = new RegExp("(\\d+) " + color, "g");
      const colorMatches = curr.matchAll(regExp);
      for (const match of colorMatches) {
        if (match[1] > colorLimits[color]) {
          invalidRound = true;
        }
        if (parseInt(match[1]) > biggestDiceCountForNumber) {
          biggestDiceCountForNumber = parseInt(match[1]);
        }
      }
      colorHighestDiceValues.push(biggestDiceCountForNumber);
    }
    return {
      part1: !invalidRound ? prev.part1 + parseInt(gameNumber) : prev.part1,
      part2: prev.part2 + colorHighestDiceValues.reduce((prev, curr) => prev * curr, 1),
    };
  },
  { part1: 0, part2: 0 },
);

console.log("Part 1", result.part1);
console.log("Part 2", result.part2);
