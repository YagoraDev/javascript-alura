// OPERADORES

// Verificar se um ano é bissexto.
// um ano é bissexto quando:
// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

const ano = 2022;
// const ano = 2000;
// const ano = 2022;
// const ano = 1992;

const anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0 && ano % 100 === 0);


if (anoBissexto) {
    console.log(`O ano ${ano} é bissexto.`);
} else {
    console.log(`O ano ${ano} não é bissexto.`);
}