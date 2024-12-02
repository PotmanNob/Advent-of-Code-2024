import * as fs from "fs";
import { join } from "path";
let safe: number = 0;
let levels : string[] = fs.readFileSync("input.txt", "utf-8").split(/\r\n/);

for (let i: number = 0; i < levels.length; i++) {
    let numbers: number[] = [];
    let isSafe: boolean = true;

    levels[i].split(" ").forEach(num => {numbers.push(parseInt(num))});


    let increasing: boolean;
    increasing = (numbers[1] - numbers[0] > 0)

    for (let j: number = 0; j+1 < numbers.length; j++) {
        if (((numbers[j+1] - numbers[j]) > 0) != increasing) {
            console.log(numbers, "checking if roc is same")
            isSafe = false;
            break;
        }

        if (Math.abs(numbers[j]-numbers[j+1]) > 3 || Math.abs(numbers[j]-numbers[j+1]) < 1) {
            isSafe = false;
            break;
        }
    }

    if (isSafe) safe++;
    // else {console.log(numbers, "numbers")};
}

console.log(safe);