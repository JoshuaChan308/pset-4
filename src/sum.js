const readlineSync = require("readline-sync");

let sum = 0;
let x = 0;

console.log();
do{
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
} while (lowerBound < Number.MIN_SAFE_INTEGER || upperBound > Number.MAX_SAFE_INTEGER || lowerBound >= upperBound || Number.isNaN(lowerBound) || Number.isNaN(upperBound) || lowerBound % 1 != 0 || upperBound % 1 != 0)

for (let x = lowerBound; x <= upperBound; x++) {
if (lowerBound % 2 === 0){
  for (x = lowerBound; x <= upperBound; x+=2){
    sum = x + sum;
  }
}
}
if (lowerBound % 2 !== 0){
  for (x = lowerBound + 1; x <= upperBound; x+=2){
    sum = x + sum;
  }
}
sum = sum.toLocaleString("en");
console.log("\n" + sum + ".\n");
