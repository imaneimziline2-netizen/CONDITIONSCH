const prompt = require("prompt-sync")();
let sum = 0
for ( let i=1 ; i<= 5 ; i++){
    let nb = Number(prompt('entrer nb: '))
    
    if(nb >= 0 ){
       sum += nb 
    }
}console.log(sum);
