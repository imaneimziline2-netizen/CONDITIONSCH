const prompt = require("prompt-sync")();

let array = [];
while(true){
    let number = Number(prompt('donn'));
    if( number >= 100){
         break
    }
       else if ( number < 100 && /[1-9]/.test(number)){
         array.push(number);
          
         let sum = 0;

         for (let index = 0; index < array.length; index++) {
            sum +=  array[index];
        }
 
         
        console.log("la somme : ", sum);
    console.log("le maximum : ", Math.max(...array));  
       }
}