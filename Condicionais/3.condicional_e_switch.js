// OPERADOR TERNARIO / OPERADOR CONDICIONAL

const nome = 'Fernando';

const saudacao = nome ? `olá, ${nome}`: 'olá, pessoa';  // Se nome for verdadeiro (?), retorne "olá, ${nome}".
                                                        // Se nome for falso (:), retorne "olá, pessoa".   
console.log(saudacao); // olá, Fernando



// SWITCH / CASE

const avaliacao = 2;

switch (avaliacao) {
    case 5:
        console.log('avaliação otima');
        break;
    case 4:
        console.log('avaliação boa');
        break;
    case 3:
        console.log('avaliação neutra');
        break;
    default:
        console.log('avaliação baixa');
        break;
}



// EXERCICIO CONDICIONAL E SWITCH

// VERIFICAR SE ESTUDANTE RECEBERÁ BÕNUS NA NOTA.
// ESTUDANTES RECEBEM BÕNUS SE A NOTA FOR 8 OU ACIMA E SE TIVEREM NO MÁXIMO 2 FALTAS.

const nome_aluno = "Roberta";
const nota = 8;
const faltas = 3;

const bonus_nota = (nota >= 8) && (faltas <= 2) 
    ? `${nome_aluno} recebera bõnus.` 
    : `${nome_aluno} não recebe bônus`; 

console.log(bonus_nota);



// CRIAR UM FLUXO QUE IDENTIFICA O TIPO DE USUÁRIO E COMUNICA DE ACORDO.
// EX: USUÁRIO FREE TEM ACESSO LIMITADO AO APP
//     USUÁRIO PREMIUM TEM ACESSO A TODAS AS FUNÇÕES
//     USUÁRIO SUPER PREMIUM TEM ACESSO TOTAL E BÔNUS ESPECIAIS

const user = "premium";

switch(user) {
    case 'free':
        console.log("Você é usuário free e tem acesso limitado no app");
        break;
    case 'premium':
        console.log("Você é usuário premium e tem acesso a todas as funções no app");
        break;
    case 'super premium':
        console.log("Você é usuário super premium e tem acesso total e bônus no app");
        break;
    default:
        console.log("Tipo de user desconhecido");
        break;
}
