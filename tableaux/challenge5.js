const prompt = require("prompt-sync")();
let array = []
for(let i=0 ; i<7 ; i++){
    let nombre = parseInt(prompt('entrer le nombre: '))
    array.push(nombre)
} 
let max = array[0];
let min = array[0];
for(let i=1 ; i<array.length ; i++){
    if(array[i] > max){
        max = array[i]
    
    }else if (array[i] < min){
        min =array[i];
    }

}console.log(`max est ${max} et min est ${min}`);



