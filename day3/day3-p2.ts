import * as fs from "fs";

let enabled: boolean = true;
let allMul: string[] = fs.readFileSync("input.txt", "utf-8").match(/(:?mul\(\d+,\d+\)|don't\(\)|do\(\))/gmi) || []; 
let valid: string[] = [];

allMul.forEach(element => {
    switch (element){
        case "don't()":
            enabled = false;
            break;
        case "do()":
            enabled = true;
            break;
        default:
            if (enabled) valid.push(element);
    }
});

let multiplied: number[] = [];

valid.forEach(ele => {
    let matchResult: string[] = ele.match(/\((\d+),(\d+)\)/mi) || ["0", "0", "0"];
    // console.log(matchResult)
    multiplied.push(parseInt(matchResult[1]) * parseInt(matchResult[2]))
})

console.log(multiplied.reduce((a, b) => a + b));