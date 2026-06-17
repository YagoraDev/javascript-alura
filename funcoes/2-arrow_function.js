// SINTAXE DA ARROW FUNCTION

const soma = (num1, num2) => {
    console.log(num1 + num2);
};




// FORMA MAIS COMPACTA

const boasVindas = nome => `óla, ${nome}`;




// MESMO EXEMPLO DO ARQUIVO ANTERIOR

const fatorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * f(num - 1);
}



// EXERCICIO
// Criar uma função para calcular juros compostos
// Função deve receber os valores no formato inteiro: valor, % de juros e tempo
// Fórmula: valor * (juro elevado a tempo) 

const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = (juros/100) + 1;
    return valor * Math.pow(taxaJuros, tempo);
}

console.log(calculaJuros(1000, 5, 2));