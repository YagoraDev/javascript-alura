/* 
Calculando desconto

Imagine que você está criando um sistema para um e-commerce que vende livros. Toda vez que o cliente aplica um cupom 
de desconto, o sistema precisa calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto.

Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:

    o preço original do produto,
    a porcentagem de desconto (com um valor padrão de 10%).
*/

function calcularDesconto(valor, desconto = 10) {
    let descontoPorc = (desconto / 100) * valor;
    let descontoFinal = valor - descontoPorc;

    console.log(`Desconto do livro: ${descontoFinal}`);
};

calcularDesconto(200, 10);
calcularDesconto(200, 50);
calcularDesconto(500, 30);