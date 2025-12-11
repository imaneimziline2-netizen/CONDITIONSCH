const prompt = require("prompt-sync")();
const num = Number(prompt("Entrez un nombre :"));
let nums = [];

for (let i = 2; i <= num; i++) {
  let premier = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      premier = false;
      break;
    }
  }

  if (premier) nums.push(i);
}

console.log(nums);
