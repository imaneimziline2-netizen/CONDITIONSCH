const prompt = require("prompt-sync")();

let mot = prompt('Entrer un mot : ').toLowerCase();
let arr = ["a" , "e" , "i" , "o" , "u" , "y"];
let count = 0 ;
for (let i = 0 ; i < arr.length ; i++ ) {
    for (let j = 0 ; j < mot.length; j++ ) {
        if (arr[i] == mot[j]) {
            count++;
        }
    }
}
console.log(count);