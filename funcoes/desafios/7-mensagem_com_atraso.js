/* 
Imagine que você está desenvolvendo uma interface de atendimento online.
Quando o usuário envia uma pergunta, o sistema precisa simular que está 
"pensando" ou "processando a resposta", e só depois exibir a resposta final.

Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

    o nome do usuário, e
    uma função de callback que será executada após 3 segundos.
*/

function responderUsuario(nomeUsuario, callback) { 
    console.log("Processando sua pergunta...");
    
    setTimeout(() => {
        callback(nomeUsuario);      // callback é igual a nome
    }, 2000);
}


function mostrarResposta(nome) {    // Segundo parametro de responderUsuario vai ficar "Yago", vindo pra ca como parametro. 
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
}

responderUsuario("Yago", mostrarResposta); // Chama a primeira função e coloca a segunda função como parametro. 