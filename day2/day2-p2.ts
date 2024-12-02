import * as fs from "fs";

let safe: number = 0;
let levels : string[] = fs.readFileSync("input.txt", "utf-8").split(/\r\n/);

for (let i: number = 0; i < levels.length; i++) {
    let numbers: number[] = [];

    levels[i].split(" ").forEach(num => {numbers.push(parseInt(num))});

    if (checkSafe(numbers)) {
        safe++;
        continue;
    }

    for (let j: number = 0; j < numbers.length; j++) {
        if (checkSafe(numbers.slice(0, j).concat(numbers.slice(j+1)))) {
            safe++;
            break;
        }
    }

}

function checkSafe(numbers: number[]): boolean {
    let isSafe: boolean = true;
    let increasing: boolean;

    increasing = (numbers[1] - numbers[0] > 0)
    
    for (let j: number = 0; j+1 < numbers.length; j++) {
        if (((numbers[j+1] - numbers[j]) > 0) != increasing) {
            isSafe = false;
            break;
        }
    
        if (Math.abs(numbers[j]-numbers[j+1]) > 3 || Math.abs(numbers[j]-numbers[j+1]) < 1) {
            isSafe = false;
            break;
        }
    }
    

    return isSafe;
}

console.log(safe);