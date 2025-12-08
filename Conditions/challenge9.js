const prompt = require("prompt-sync")();
let nombre = Number(prompt('entrer le nombre: '))
switch (true){
    case (nombre % 3 === 0 && nombre % 5 === 0):
        console.log('fizzbuzz');
        break
    case(nombre % 3 === 0):
        console.log('fizz')
        break
    case(nombre % 5 === 0):
        console.log('buzz')
        break
    default:
        console.log(nombre);break;
}