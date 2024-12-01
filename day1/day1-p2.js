let fs = require("fs");
const internal = require("stream");

let document = fs.readFileSync("input.txt", "utf-8").split(/\r\n/);

let similarity = 0;
let leftNumbers = [];
let rightNumbers = [];
let rightNumbersMap = new Map();

for (let i = 0; i < document.length; i++) {
    leftNumbers.push(parseInt(document[i].match(/(\d+)\s+(\d+)/)[1]));
    rightNumbers.push(parseInt(document[i].match(/(\d+)\s+(\d+)/)[2]));
}

for (let i = 0; i < rightNumbers.length; i++) {
    if (rightNumbersMap.has(rightNumbers[i])) {
        rightNumbersMap.set(rightNumbers[i], rightNumbersMap.get(rightNumbers[i]) + 1);
    } else {
        rightNumbersMap.set(rightNumbers[i], 1);
    }
}

for (let i = 0; i < leftNumbers.length; i++) {
    if (rightNumbersMap.get(leftNumbers[i])) {
        similarity += leftNumbers[i] * rightNumbersMap.get(leftNumbers[i]);
    }
}
console.log(similarity);