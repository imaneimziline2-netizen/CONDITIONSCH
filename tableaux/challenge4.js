const prompt = require("prompt-sync")();
let ch_recherch = prompt("entrez  la chaine à recherchez: ");
let array = [];
for (let i = 0; i < 3; i++) {
  let ch_entree = prompt("entrez la chaine:  ");
  array.push(ch_entree);
}
let position = array.indexOf(ch_recherch);
if (array.indexOf(ch_recherch) ===-1) {
  console.log(" cest  chaine NON existe ");
} else {
  console.log(
    `La chaîne ${ch_recherch} a été trouvée à la position ${position}`
  );
}

