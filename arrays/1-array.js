/* 

O QUE SÃO ARRAYS?

Arrays são coleções ordenadas de valores.
Cada valor é chamado elemento e tem sua posição na lista
determinada por um índice.

*/

//              0          1         2         3         4
const arr = [elemento, elemento, elemento, elemento, elemento];

const arrNumeros = [1, 2, 3];

const arrMisto = [5, true, 'texto'];

const arrArrays = [[1, 2], ['a', 'b', 'c'], [true, false]];



// MANIPULANDO ARRAYS

//                   0   1   2   3
const arrNUmeros = [46, 34, 23, 12];

console.log(arrNUmeros[0]);
console.log(arrNUmeros[1]);
console.log(arrNUmeros[2]);
console.log(arrNUmeros[3]);

// MODIFICANDO VALORES

arrNUmeros[1] = 36;
arrNUmeros[4] = 100;

console.log(arrNUmeros);
//[ 46, 36, 23, 12, 100 ]




// PRATIQUE CONSTRUINDO ARRAYS E ACESSANDO SEUS ELEMENTOS ATRAVÉS DOS ÍNDICES

const Arr = [1, 2, 3, 4];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

Arr[0] = 3;

console.log(Arr);