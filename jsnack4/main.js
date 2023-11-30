//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//inserire array con i nomi degli invitati
const invited = ["Luigi", "Alessandro", "Fabio", "Michela", "Paolo", "Sofia"];
let result = "";
// chiedere all'utente il suo nome
let user = prompt("Perfavore inserisci il tuo nome qui");
//comunicargli se può partecipare
if (invited.includes(user)) {
  console.log("puoi partecipare");
  result = "Puoi partecipare alla festa del grande Gatsby";
} else {
  //oppure no
  console.log("non puoi partecipare");
  result = "Mi dispiace non puoi partecipare alla festa del grande Gatsby";
}
document.getElementById("result").innerHTML = `${result}`;
