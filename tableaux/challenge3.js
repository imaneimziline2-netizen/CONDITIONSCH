const prompt = require("prompt-sync")();
let sible = prompt( ' entrer une nombre: ') 
let arry = [];
for(  let i = 0; i<8; i++){
let nbr = parseInt(prompt('entrer un nombre entier: '))
arry.push(nbr)
}
let index = arry.indexOf(sible)
if( arry.indexOf(sible)!==-1){
    console.log(`ce nombre est existe ${index}`);
    
}else{
    console.log(`${index}`);
    
}