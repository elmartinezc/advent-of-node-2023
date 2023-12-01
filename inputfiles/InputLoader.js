import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class InputLoader {
    static loadChallengeInputAsArray(challengeDay) {
        const input = readFileSync(resolve(__dirname, `./${challengeDay}.txt`));
        return input.toString().split("\n");
    }
}