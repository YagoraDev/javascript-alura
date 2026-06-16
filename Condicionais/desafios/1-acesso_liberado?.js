// ACESSO LIBERADO?

// Você está desenvolvendo um sistema de controle de acesso para um evento. Para entrar, a pessoa precisa ter 18 anos ou mais.

// Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem informando se o acesso foi ou não permitido.

const idade = 20;

const verifica_idade = idade >= 18 
    ? "Você é maior de idade, pode entrar" 
    : "Você é menor de idade, não pode entrar.";

console.log(verifica_idade);