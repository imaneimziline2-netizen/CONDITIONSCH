  const prompt = require("prompt-sync")();
 
 function produitTableau(tab){
let multiplication = 1

for(let i = 0 ; i < tab.length ; i++){
    multiplication*=tab[i]
}
return multiplication;
 }
console.log(produitTableau([1,2,3,4]));






// function tableauMulti(array){
// let multiplacation = 1
// for(let i=0 ;i<array.length ; i++){
//     multiplacation*=array[i]
// }
// return multiplacation

// }console.log( tableauMulti([1,2,3,4]));
