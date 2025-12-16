const prompt = require("prompt-sync")();

let arry = [];
for (let i = 0; i < 5; i++) {
  let nbr = Number(prompt("Entrer 5 nombre:: "));
  arry.push(nbr);
}
arry.reverse();
console.log(arry);
