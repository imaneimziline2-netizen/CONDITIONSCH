const prompt = require("prompt-sync")();

let array = []
for(let i=0 ; i<7 ; i++){
    let nombre = parseInt(prompt('entrer une nombre : '))
    let nbr = nombre*nombre
    array.push(nbr)
}console.log(array);
