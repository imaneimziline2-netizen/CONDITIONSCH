const prompt = require("prompt-sync")();
 
function filtrerPairs(tab){
// let pair = Number(prompt("entrer les nombre : "))
for(let i =0 ; i < tab.length ; i++){
    tabtwo=[];
   if( tab[i]% 2 ==0){
        tabtwo.push(tab[i])
        console.log(tabtwo);
    }
}
 
}
filtrerPairs([2,4,3,7]);