const prompt = require("prompt-sync")();

let result = "";
let array = [];
while (true) {
  let number = Number(prompt("entrer le n et entrer 0 POUR  arratée: "));
  if (number === 0) break;

  array.push(number);
}

for (let index = array.length - 1; index >= 0; index--) {
  result += array[index];
}
console.log(result);

