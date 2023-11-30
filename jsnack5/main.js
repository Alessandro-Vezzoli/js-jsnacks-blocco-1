// Creare un array vuoto
let numberTot = [];

//Chiedere per 6 volte di inserire un numero
for (let i = 0; i < 6; i++) {
  const number = Number(prompt("Scrivi un numero"));

  // se il numero è dispari inserirlo nell'array

  if (number % 2 == 1) {
  } else {
    numberTot = number;
  }
  console.log(numberTot);
}
