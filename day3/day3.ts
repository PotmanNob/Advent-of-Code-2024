import * as fs from "fs";

let allMul: string[] = fs.readFileSync("input.txt", "utf-8").match(/mul\(\d+,\d+\)/gmi) || []; 
let multiplied: number[] = [];

allMul.forEach(ele => {
    let matchResult: string[] = ele.match(/\((\d+),(\d+)\)/mi) || ["0", "0", "0"];
    // console.log(matchResult)
    multiplied.push(parseInt(matchResult[1]) * parseInt(matchResult[2]))
})

console.log(multiplied.reduce((prev, curr) => prev + curr));