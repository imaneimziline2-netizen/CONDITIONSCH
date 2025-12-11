const prompt = require("prompt-sync")();

let nb = Number(prompt('entrer nb : '))
let exp = Number(prompt('entrer exp : '))
let result = nb
let i = 1
while(i< exp){
    result *= nb ;
    i++

    
}

console.log(result);
