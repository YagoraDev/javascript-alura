// EXEMPLO DE CÓDIGO FOR

const numero = 5;                                   // RESULTADO DO LOOP FOR
                                                    //    5 x 1 = 5  
for (let i = 1; i <= 10; i++) {                     //    5 x 2 = 10
    const resultado = numero*i;                     //    5 x 3 = 15
    console.log(`${numero} x ${i} = ${resultado}`); //    5 x 4 = 20
};                                                  //    5 x 5 = 25
                                                    //    5 x 6 = 30
                                                    //    5 x 7 = 35
                                                    //    5 x 8 = 40
                                                    //    5 x 9 = 45
                                                    //    5 x 10 = 50


                                                 
/* 

BREAK

Gerar números aleatórios de 1 a 50 e interromper o laco caso o número gerado seja 15.
Interromper depois de 50 tentativas e contar a quantidade de tentativas.

*/

for (let contadorX = 1; contadorX <= 50; contadorX++) {
    const numero = Math.floor(Math.random() * (50 - 1) + 1);
    if (numero === 15) {
        console.log(`${numero} em ${contadorX} tentativas`);
        break // Encerra quando achar o 15, bem antes de chegar nos 50.
    };
};




// CONTINUE

let contador = 0;

for (let a = 1; a <= 20; a++) {
    const number = Math.floor(Math.random() * (50 - 1) + 1);
    if (number % 5 === 0) {
        continue // Vai pular para a proxima linha quando chegar no resultado do loop.
    };
    contador++;
}

console.log('Contador', contador)




// GERAR NÚMEROS ALEATÓRIOS DE 1 A 50
// CRIAR UM CONTADOR QUE SÓ É INCREMENTADO CASO OS NÚMEROS NÃO SEJAM DIVISÍVEIS POR 5
// NO FINAL, EXIBIR O VALOR DO CONTADOR.

let Contador = 0;

for (let b = 1; b <= 30; b++ ) {
    const number = Math.floor(Math.random() * (50 - 1) + 1);
    if (numero % 5 === 0) {
        continue;
    }
    Contador++;
}

console.log(Contador);