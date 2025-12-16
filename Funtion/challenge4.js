const prompt = require("prompt-sync")();

function compterOccurrences(tab, valeur){
let cont =0 
for(let i =0 ; i<tab.length ; i++){
    if(  tab[i] === valeur){
        cont++
    }
}
return cont;


}console.log(compterOccurrences([1,2,5,4,5],5 ));
