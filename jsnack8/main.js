//Chiedi un numero di 4 cifre all’utente
//calcola la somma di tutte le cifre che compongono il numero

//richiesta all'utente del numero a 4 cifre

let numbers4 = prompt("Inserisci un numero di 4 cifre:");

let result = "";

if (numbers4.length === 4 && !isNaN(numbers4)) {
  let numbers = numbers4.split("").map(Number);

  // Inizializza la variabile per la somma delle cifre
  let som = 0;

  // Calcola la somma delle cifre
  for (let number of numbers) {
    som += number;
  }

  // Mostra il risultato
  console.log(`La somma delle cifre di ${numbers4} è ${som}`);
  result = `La somma delle cifre di ${numbers4} è ${som}`;
} else {
  console.log("Inserisci un numero valido di 4 cifre.");
  result = "Inserisci un numero valido di 4 cifre.";
}
document.getElementById("result").innerHTML = result;
