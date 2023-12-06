import { InputLoader } from "../inputfiles/InputLoader.js";

const inputData = InputLoader.loadChallengeInputAsArray(6);
const calculateWinningOptions = (times, distances) => {
  return times.reduce((prev, time, index) => {
    let winningOptions = 0;
    for (let pressTime = 0; pressTime < time; pressTime++) {
      const distanceDone = pressTime * (time - pressTime);
      if (distanceDone > distances[index]) winningOptions++;
    }
    return prev * winningOptions;
  }, 1);
};

console.log(
  "Part 1: ",
  calculateWinningOptions(
    ...inputData.map((line) => {
      return line.split(" ").filter((d) => d.match(/\d/));
    }),
  ),
);

console.log(
  "Part 2: ",
  calculateWinningOptions(
    ...inputData.map((line) => {
      return [line.split(":")[1].replace(/ /g, "")];
    }),
  ),
);
