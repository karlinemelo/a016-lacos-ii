// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// **Utilize o for...of para resolver**
// ```jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"

let bigAnimals = ["Elefante", "Girafa", "Vaca", "Camelo"];
let contagemAnimais = 0;

for (let i of bigAnimals) {
  contagemAnimais += 1; // adicionar 1 em cada loop.
  console.log(`${contagemAnimais} - ${i}`); //o i é o index de cada array
}
