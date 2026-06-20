// MÉTODOS DE ARRAY

const arrNumeros = [12, 23, 34, 45, 56];

arrNumeros.push(67);        // ADICIONAR UM ELEMENTO NA ARRAY
console.log(arrNumeros);
//[ 12, 23, 34, 45, 56, 67 ]


arrNumeros.pop();           // RETIRAR O ULTIMO ELEMENTO DA ARRAY
console.log(arrNumeros);
//[ 12, 23, 34, 45, 56 ] 


const elem = arrNumeros.indexOf(12); // BUSCA O ELEMENTO PARA VER SE EXISTE
console.log(elem);
// RETRONA O INDICE LOCALIZADO
//[ 0, 1, 2, 3, 4 ]
//0


const novoArr = arrNumeros.slice(2); // COMECA A PARTIR DO INDICE SELECIONADO (ARRAY FATIADO)
console.log(novoArr);
//[ 34, 45, 56 ]




// MÉTODOS DE ARRAY - CALLBACKS - .map()

const arrayNumeros = [12, 23, 34, 45, 56];

const arrCalculado = arrayNumeros.map((num) => { // .map() CRIA UM NOVO ARRAY APLICANDO UMA FUNÇÃO EM CADA ELEMENTO
    return num * 10;
});

//[ 120, 230, 340, 450, 560 ]
console.log(arrCalculado)




// MÉTODOS DE ARRAY - CALLBACKS - .forEach()

// const arrayNumeros = [12, 23, 34, 45, 56];

// .forEach() PERCORRE O ARRAY INTEIRO, PEGANDO CADA NÚMERO E SUA POSIÇÃO,
// E FAZ ALGO COM ELES (NO CASO, EXIBE NO CONSOLE), MAS SEM CRIAR UM NOVO ARRAY.

arrayNumeros.forEach((num, i) => {
    console.log(`O número ${num} está no índice ${i}`);
});

// O PRIMEIRO PARÂMETRO É O VALOR (ELEMENTO), O SEGUNDO É A POSIÇÃO (INDICE) ONDE ESSE VALOR ESTÁ NO ARRAY.

//         (num)             (i)
// O número 12 está no índice 0
// O número 23 está no índice 1
// O número 34 está no índice 2
// O número 45 está no índice 3
// O número 56 está no índice 4




// MÉTODOS DE ARRAY - CALLBACKS - .filter

// const arrayNumeros = [12, 23, 34, 45, 56];

const arrFiltrado = arrNumeros.filter(num => num % 5 === 0); // TODO ELEMENTO QUE FOR DIVISIVEL POR 5 SERÁ MOSTRADO

//[ 45 ]
console.log(arrFiltrado);





// EXERCICIO - REVISAR
// CLONAR ARRAY MULTIDIMENSIONAL COM "DEP COPY"
// POR QUE NÃO PODEMOS CLONAR ARRAYS VIA VARIÁVEL?

const arr1 = [[1, 2], 2, 3]; 

const copiaArray = (arr) => {
    const copia = [];
    arr.forEach((elem) => {
        if (Array.isArray(elem)) {
            copia.push(copiaArray(elem));
        } else {
            copia.push(elem);
        }
    })
    return copia;
}

const arr2 = copiaArray(arr1);
arr1[0][0] = 5;

console.log(arr1);
console.log(arr2);




// FILTRAR UM ARRAY E ALTERAR VALORES ESPECÍFICOS
// EX: ALTERAR NUMEROS PARA STRINGS

const cpfs = ["12354678912", "34256748905", 46579803547, "75139364014", 57479367478];

const result = cpfs.map(cpf => typeof cpf === 'string' ? cpf : cpf.toString()); // COM OPERADOR TERNARIO

/* METODO EXTENSO
const result = cpfs.map(cpf => {
    if (typeof cpf === 'string') {
        return cpf;
    } else {
        return cpf.toString();
    }
})
*/

console.log(result);