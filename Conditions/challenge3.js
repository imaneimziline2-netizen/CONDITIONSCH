const prompt = require("prompt-sync")();
   
 let Age = (prompt('enter your Age: '));
 if ( Age >= 18) {
    console.log('Éligibldeux e au vote');
}
else {
    console.log('Non éligible')
}