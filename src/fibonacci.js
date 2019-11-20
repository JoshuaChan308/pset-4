const readlineSync = require("readline-sync");

let positiveInteger = 0;

console.log();
do{
    positiveInteger = Number(readlineSync.question("Positive integer: "));
} while (positiveInteger < 1 || positiveInteger > 78 || Number.isNaN(positiveInteger) || !Number.isInteger(positiveInteger));

let previous = 1;
let secondPrevious = 0;
let sum = 0;
if(positiveInteger == 1){
    console.log("\n0.");
} else{
    while(positiveInteger > 1){
        sum = previous + secondPrevious;
        secondPrevious = previous;
        previous = sum;
        positiveInteger--;
    }
final = sum.toLocaleString('en', {minimumFractionDigits: 0, maximumFractionDigits: 0})
console.log("\n" + final + ".");
}
