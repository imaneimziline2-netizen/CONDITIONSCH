const prompt = require("prompt-sync")();
let tab=[];
function inverserTableau(){
    let elmnt = Number(prompt("entrer combien de valeur vous antrer au tableau :"))
    for (let index = 0; index < elmnt; index++) {
        let vale=prompt("entrer valeur :")
        tab.push(vale)
    }
    console.log("l'ancien: ",tab);
    let reverse = tab.reverse();
    console.log("Nouveau : ",reverse);
}
 inverserTableau()