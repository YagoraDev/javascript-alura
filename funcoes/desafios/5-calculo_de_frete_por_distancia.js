/* 
Cálculo de frete por distância

Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. 
Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. 
A regra é a seguinte:

    Até 5 km: frete fixo de R$ 5
    De 5.1 km até 20 km: R$ 0,50 por quilômetro
    Acima de 20 km: frete fixo de R$ 20

Seu desafio é escolher o tipo de função mais adequado para resolver este problema. 
Função tradicional? Arrow Function? E aí? Como vai implementar esse desafio? 
*/

function calcularFrete(valor) {
    if (valor <= 5) {
        console.log("Valor do frete: $", valor);
    } else if (valor > 5 && valor <= 20) {
         let frete = 5 + (valor - 5) * 0.5;
         console.log("Valor do frete: $", frete); 
    } else {
         console.log("Valor do frete: $ 20"); 
    }
        
    }


calcularFrete(6);
calcularFrete(12);
calcularFrete(15);
calcularFrete(4);