const prompt = require("prompt-sync")();

let an = Number(prompt('année : '));
console.log(an)
if (  an % 4== 0 && an % 100 !== 0 ){
     console.log('année bissexite')
}
else if ( an % 400 ==0){
    console.log(' année bissexite')
}   
else{
    console.log(' année no bissexite')
}
