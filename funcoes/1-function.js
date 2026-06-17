// FUNCTION

// Elevar um número x a uma potência y

function calculaPotencia(num, pow) {
    let resultado = 1;                    // Começa com 1, pois 0 não da continuidade pro restante da operação.
    for (let i = 0; i < pow; i++) {       // i=1, i=2, i=3 de acordo com o loop for.
        resultado = resultado * num;      // 1x4=4, 4x4=16, 16x4=64.
    }
    return resultado;                     // Retorna o valor final.
};

console.log(calculaPotencia(4, 3));       // 64





// EXPRESSAO DE FUNCAO

const fatorial = function f(num) {
    if (num === 0 || num === 1) return 1;
    return num * f(num - 1);
}

// 5 * fatorial(4)  -  120
// 4 * fatorial(3)  -  24
// 3 * fatorial(2)  -  6
// 2 * fatorial(1)  -  2

console.log(fatorial(5)); // 120