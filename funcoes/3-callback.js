// FUNCOES CALLBACK
// Funções callback são passadas como argumento de outra função, de onde podem
// receber valores. São executadas a partir da função externa.



// CALLBACK COM FUNCTION

setTimeout(function() {         // function(){} é o primeiro parametro de setTimeout.
    console.log('Olá, mundo');
}, 2000);                       // 2000 é o segundo parametro de setTimeout
                                // Depois de dois segundos a function sera executada.



                             
// CALLBACK COM ARROW FUNCTION

setTimeout(() => console.log('Olá, mundo'), 2000);  




// É POSSÍVEL DESACOPLAR AS FUNÇÕES, DEFININDO CALLBACKS SEPARADAS 
// DA FUNÇÃO EXTERNA, CHAMADA DE FUNÇÃO DE ORDEM SUPERIOR.

setTimeout(exibeFrase, 5000);

function exibeFrase() {
    console.log('Ola, mundo');
}




// EXERCICIO
// CRIAR UMA FUNÇÃO QUE FAÇA OPERAÇÕES MATEMÁTICAS ENTRE 2 VALORES (SOMA E MULTIPLICAÇÃO) 
// FUNÇAO DEVE RECEBER POR PARÂMETRO: OPERAÇÃO DESEJADA, VALOR1 E VALOR2.

function soma(a, b) { return a + b};
function multiplica(a, b) { return a * b};


// Função que recebe outra função (fnOperacao) e 2 valores, e executa a função recebida
function calcula(fnOperacao, valorA, valorB) {          // Recebe uma função e 2 números
    return fnOperacao(valorA, valorB);                  // Executa a função recebida com os 2 números e devolve
}


console.log(calcula(soma, 10, 10));
console.log(calcula(multiplica, 10, 10));





// CRIAR UMA FUNÇAO QUE EMITA UMA MENSAGEM CASO USUÁRIO X NÃO ESTEJA INTERAGINDO COM O
// SISTEMA APÓS QUANTIDADE Y DE TEMPO.

const userId = '4545656'

const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa`);

setTimeout(avisaUsuario, 2000, userId); // No terceiro parametro em diante é preciso mostrar todas as funções internas que sera utilizado.

// ACLOPADO
// setTimeout((userId) => console.log(`sessão de ${userId} está inativa`), 4000, userId);
