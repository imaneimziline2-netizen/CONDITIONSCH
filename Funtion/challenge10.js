const prompt = require("prompt-sync")();
function  supprimerDoublons(tab){
let arr = []
for(let i = 0; i < tab. length; i++ ){
    if( !arr.includes(tab [i]))
        arr.push(tab[i])
}
return arr
}
 console.log(supprimerDoublons([1,2,2,4,4,5,5]));

  

 



 

// function supprimerDoublons(tab) {
//     let arr = []; // Array jdida فارغة
    
//     // Parcourir kol elements
//     for (let i = 0; i < tab.length; i++) {
//         // Ila element ماكاينش f arr
//         if (!arr.includes(tab[i])) {
//             arr.push(tab[i]); // زيدو
//         }
//         // Sinon (كاين = doublon) → ماندوروش
//     }
    
//     return arr; // رجع array bila doublons
// }

// // Test
// console.log(supprimerDoublons([1, 2, 2, 4, 4, 5, 5]));
// // Output: [1, 2, 4, 5]