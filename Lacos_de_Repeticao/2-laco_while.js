// EXEMPLO DE CODIGO WHILE

// Gerar um laço que tente "adivinhar" um dado numero de 1 a 50
// e conte a quantidade de tentativas ate o resultado

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





// DO WHILE

// Criar um laço que gere um numero aleatorio de 1 a 50
// Executar o laço enquanto não gerar um numero par

let numeroRandom = 0;

do {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1) + 1);
    console.log(numeroRandom);
} while (numeroRandom % 2 !== 0);

console.log(numeroRandom);





// Criar um laco que recebe um texto e verifica se e um palídromo (mesmo nome de tras pra frente)
// Imprimir no console o texto, informando se é ou nao palídromo

const texto = 'alura'
// const texto = 'arara'

let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

const result = texto === textoInvertido
    ? `${texto} é palídromo`
    : `${texto} não é palídromo`;