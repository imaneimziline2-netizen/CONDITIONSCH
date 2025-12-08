const prompt = require("prompt-sync")();
let N = Number(prompt('enter le sckore : '))
if( N >= 90 &&  N <= 100 ){
    console.log('A')
}
else if ( N <=  89 && N >= 80 ){
console.log('B')
}
else if ( N <= 79 && N >= 70 ){
    console.log('C')
}
else if ( N <= 69 && N >= 60){
    console.log('D')
}
else {
    console.log('F')
}