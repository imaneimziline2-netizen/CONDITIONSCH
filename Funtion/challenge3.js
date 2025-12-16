const prompt = require("prompt-sync")();
function maxTableaux(array){
    let max = array[0]
    
   for(let i=0 ; i<array.length ;i++){
   if (array[i] > max) {
            max = array[i]; 
        }
   }
//    return max;
   console.log(max)

    }
maxTableaux([3,9,6,8,4,1,7])

