const prompt = require("prompt-sync")();
function  motsLongs(tabMots=[], longueur) {

    return tabMots.filter(tabMot => tabMot.length >= longueur )

}
console.log(motsLongs(["Imane", "taha", "rida", "hamza", "mohamede" ],6));

