import { InputLoader } from "../inputfiles/InputLoader.js";

const numbers = {
    "oneight": 18,
    "twone": 21,
    "sevenine": 79,
    "eightwo": 82,
    "eighthree": 83,
    "nineight": 98,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
}

const inputData = InputLoader.loadChallengeInputAsArray(1);

const extractAndAggregateNumbers = (inputData, replaceNumberStrings) => inputData.reduce((prev, curr) => {
    if (replaceNumberStrings) {
        for (const key of Object.keys(numbers)) {
            if (curr.includes(key)) {
                curr = curr.replace(new RegExp(key, "g"), numbers[key]);
            }
        }
    }
    const nums = curr.replace(/\D/g, '');
    return nums !== "" ? prev + parseInt(nums.slice(0, 1) + nums.slice(-1)) : prev;
}, 0);

console.log("Part 1: ", extractAndAggregateNumbers(inputData));
console.log("Part 2: ", extractAndAggregateNumbers(inputData, true));