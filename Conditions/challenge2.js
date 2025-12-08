 const prompt = require("prompt-sync")();
   
 let number = Number(prompt('enter number: '))
 if (number<0){
    console.log('négatif')
}
else if (number>0){
        console.log('positif')
    }
else {
    console.log('nul')
}

 
