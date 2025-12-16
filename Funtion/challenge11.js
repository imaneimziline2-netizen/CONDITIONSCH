const prompt = require("prompt-sync")();
function  tableMultiplication(n) {
let arr = []
for(let i = 1 ; i <= 10 ; i++){
    arr.push(n*i)
}
return arr

}
console.log(tableMultiplication(2));
