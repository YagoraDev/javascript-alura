// ACESSANDO E MANIPULANDO
// ARRAYS COM FOR

const arrNumeros = [46, 34, 23, 12];

for (let i = 0; i < arrNumeros.length; i++) {
    console.log(arrNumeros[i]);
}

for (let i = 0; i < arrNumeros.length; i++) {
    arrNumeros[i] = arrNumeros[i] * 10;
}

// [ 460, 340, 230, 120 ]
console.log(arrNumeros);




// COM STRINGS

const estudantes = ["JULIana", "aline", "SOLANGE"];

for (let i = 0; i < estudantes.length; i++) {
    estudantes[i] = estudantes[i].toUpperCase();
}

// [ 'JULIANA', 'ALINE', 'SOLANGE' ]
console.log(estudantes);





// ARRAYS COM FOR...OF

const arrayNumeros = [18, 95, 45, 76, 23, 99];

for (let numero of arrayNumeros) {
    if (numero + 10 > 100 || numero > 100) continue;
    console.log(numero + 10);
}




// EXERCICIO
// CRIAR UM ARRAY COM UMA SEQUÊNCIA DE NÚMEROS ENTRE X E Y

//                     12    30
function criarArrNum(inicio, fim) {
    const arr = [];
    let elemento = inicio;

    for (let i = 0, j = 0; j < fim; i++, elemento++) {
        arr[i] = elemento;
        j = elemento;
    }
    return arr;
}

console.log(criarArrNum(12, 30));