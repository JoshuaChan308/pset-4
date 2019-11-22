const readlineSync = require("readline-sync");
let average = 0
let sum = 0
divide = 0

console.log();
do{
  nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
  if (nonNegativeInteger >= 0 && nonNegativeInteger <Number.MAX_SAFE_INTEGER && !Number.isNaN(nonNegativeInteger) && nonNegativeInteger % 1 == 0) {
    sum = nonNegativeInteger + sum
    divide +=1
  }
} while ((nonNegativeInteger >= 0 && nonNegativeInteger < Number.MAX_SAFE_INTEGER &&  nonNegativeInteger % 1 == 0) || Number.isNaN(nonNegativeInteger) || divide == 0)

average = sum/divide

average = average.toLocaleString('en', {minimumFractionDigits: 3, maximumFractionDigits: 3});
console.log("\n" + average +  ".\n");
