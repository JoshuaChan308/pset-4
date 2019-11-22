const readlineSync = require("readline-sync");
let reversed = "";
let x = 0
console.log();
do {
  positiveInteger = Number(readlineSync.question("Positive Integer: "));
} while (positiveInteger < Number.MIN_SAFE_INTEGER || positiveInteger > Number.MAX_SAFE_INTEGER || Number.isNaN(positiveInteger) || positiveInteger % 1 != 0 || positiveInteger <= 0)

do {
  x = positiveInteger % 10;
  reversed = reversed + x + ", ";
  positiveInteger = positiveInteger - x
  positiveInteger = positiveInteger / 10;
} while (positiveInteger > 10);

reversed = reversed + positiveInteger + "."

console.log("\n" + reversed + "\n");
