const prompt = require("prompt-sync")();
let array = []
let sum = 0
let moyene = 0
for(let i =0 ; i < 10 ; i++){
    let nbr = Number(prompt('entrer le nbr: '))
    array.push(nbr)
    sum += nbr
  }moyene = sum/10
  console.log(` la somme est :${sum}; le moyene est :${moyene}`);
  