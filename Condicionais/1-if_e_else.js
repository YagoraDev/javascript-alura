// IF/ELSE

// DEFINIR UM FLUXO PARA SOMAR OU MULTIPLICAR DOIS NÚMEROS USANDO IF/ELSE

const num1 = 2
const num2 = 4
const operacao = 'soma'

// operacao: + ou *
if (operacao === '+') {
    console.log(num1 + num2);
} else if (operacao === '*') {
    console.log(num1 * num2);
} else {
    console.log('Operação não identificada');
}





console.log();
console.log('----------------------------------------------------------------------------');
console.log();





// LOCALIZAR O NÍVEL DE BÔNUS DE ACORDO COM A FAIXA SALARIAL
// EX: $11000 E ACIMA: 3% DE BÔNUS
//     $10999 A $7000: 5% DE BÔNUS
//     $ 6999 A $4000: 7% DE BÔNUS
//     $ 3999 P BAIXO: 9% DE BÔNUS

const salario = 2000;

const bonus3 = (3 / 100) * salario;
const bonus5 = (5 / 100) * salario;
const bonus7 = (7 / 100) * salario;
const bonus9 = (9 / 100) * salario;

if (salario >= 11000) {
    console.log(`Bônus de 3% de $${salario}: $${bonus3}`);
} else if (salario < 11000 && salario > 7000) {
    console.log(`Bônus de 5% de $${salario}: $${bonus5}`);
} else if (salario < 7000 && salario > 4000) {
    console.log(`Bônus de 7% de $${salario}: $${bonus7}`);
} else if (salario < 4000 && salario > 1) {
    console.log(`Bônus de 9% de $${salario}: $${bonus9}`);
} else {
    console.log('Valor inválido ou saldo insuficiente');
}