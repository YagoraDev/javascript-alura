/* 
Calculando a média de duas notas

Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. 
A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.

Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.
*/

const calcularMedia = (a, b) => {
    let media = (a + b) / 2;
    console.log("Sua media: ", media);
}

calcularMedia(5, 8);