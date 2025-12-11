const prompt=require('prompt-sync')();

let ligne = Number(prompt('n° ligne: '))
for (let i = 1; i <= ligne; i++) {
let etoile ="*".repeat(2*i-1)
let espace = " ".repeat(ligne-i)


console.log(espace, etoile);

}