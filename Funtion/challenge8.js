const prompt = require("prompt-sync")();

function moyenne(tab){
    let le_moyenne = 0
    let somme = 0
    for(let i = 0 ; i < tab.length ; i++){
        somme+= tab[i]
        le_moyenne = somme / tab.length
    }return le_moyenne
}console.log(moyenne([1,2,3,4]));
