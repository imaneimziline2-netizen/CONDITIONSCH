const prompt = require("prompt-sync")();

 function doubler(tab){
  
    let doubles = tab.map((num) => {
    return num * 2;
});
console.log(doubles);
}
 
console.log(doubler([4,7,3,9,2,6]));