// EXEMPLO DE CODIGO WHILE

let numeroSecreto = 8;
let numeroAleatorio = 0;
let contador = 0;

while(numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1) + 1);
    contador++;
}

console.log(`Adivinhou em ${contador} tentativas`);




// PROPRIEDADE .LENGTH

const palavra = 'papagaio';

// 0 1 2 3 4 5 6 7
// ["p", "a", "p", "a", "g", "a", "i", "o"];

for (i = 0; i < palavra.length; i++) {
    console.log(palavra[i]);
};