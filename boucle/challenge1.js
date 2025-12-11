const prompt = require("prompt-sync")();
let nombre = Number(prompt('entrer le nombre : '));
for ( let i = 1; i <= 10 ; i++){
    console.log( nombre + '*' + i + '=' + nombre * i );
}
