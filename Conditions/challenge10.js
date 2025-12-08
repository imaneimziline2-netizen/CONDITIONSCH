const prompt = require("prompt-sync")();
let nom = prompt (' saisir le nom : ')
let mot_de_passe = prompt (' saisir le mot de pass:  ')

if (nom=="admin" && mot_de_passe=="1234" ){
    console.log("Bienvenue Admin");
}else if (nom=="admin" && mot_de_passe!=="1234" ){
    console.log("Mot de passe incorrect");  
}
else{
    console.log("Utilisateur introuvable" );
}