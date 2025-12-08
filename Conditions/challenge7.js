const prompt = require("prompt-sync")();
let mot_de_passe = prompt('entrer le mot de passe: ');
const motdepassse = /\d/
const regex = /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[\W_]).{8,}$/;
if ( mot_de_passe.length<6 ){
    console.log(' faible ')
}
else if ( mot_de_passe.length>= 8 &&   motdepassse.test( mot_de_passe) && regex.test(mot_de_passe)){
    console.log(' fort ') 
}
else if ( mot_de_passe.length>= 6 &&  motdepassse.test( mot_de_passe)) {
    console.log(' moyen ')
}
    
    


