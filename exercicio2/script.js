/* Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

**Utilize o for...in para resolver**

Exemplo com entrada **`7`**:
```jsx
7
14
21
28
35
42
49
56
63
70
```
*/

let escolheNumero = +prompt("Escolha um número");
let multiplicar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in multiplicar) {
  //console.log(typeof i); Se quiser saber o que significa o i
  //No for in tem que transformar o i em number. Por isso esse + antes do i
  console.log(`${+i + 1} * ${escolheNumero} = ${(+i + 1) * escolheNumero}`); // os dois estao dentro do mesmo cifrão para que a multiplicacao possa funcionar
}
