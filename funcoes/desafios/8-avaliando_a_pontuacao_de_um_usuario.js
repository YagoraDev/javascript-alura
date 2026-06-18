/* 
Avaliando a pontuação de um usuário

Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo.
Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:

    Foi aprovado, se a pontuação for igual ou maior que 70
    Precisa de reforço, se a pontuação estiver entre 50 e 69
    Foi reprovado, se a pontuação for menor que 50

Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:

    a pontuação final do jogador
    uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.
*/

function avaliarDesempenho(pontuacaoFinal, callback) {
    console.log(`Pontuação: ${pontuacaoFinal}`);

    setTimeout(() => {
        callback(pontuacaoFinal);
    }, 2000);
}

function mensagemPersonalizada(pontuacao) {
    if (pontuacao >= 70) {
        console.log("Parabéns! Você foi aprovado!");
    } else if (pontuacao >= 50) {
        console.log("Você precisa de reforço");
    } else {
        console.log("infelizmente você está reprovado.");
    }
}

avaliarDesempenho(30, mensagemPersonalizada);