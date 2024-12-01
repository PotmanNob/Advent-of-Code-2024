let fs = require("fs");

let document = fs.readFileSync("input.txt", "utf-8").split(/\r\n/);

let sum = 0;
let leftNumbers = [];
let rightNumbers = [];

for (let i = 0; i < document.length; i++) {
    leftNumbers.push(parseInt(document[i].match(/(\d+)\s+(\d+)/)[1]));
    rightNumbers.push(parseInt(document[i].match(/(\d+)\s+(\d+)/)[2]));
}

leftNumbers.sort();
rightNumbers.sort();

for (let i = 0; i< leftNumbers.length; i++) {
    sum += Math.abs(leftNumbers[i] - rightNumbers[i]);
    console.log(Math.abs(leftNumbers[i] - rightNumbers[i]))
}

console.log(sum);
