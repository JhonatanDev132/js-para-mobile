// 02-funcoes

/* Formas tradicionais */

// Sintaxe anônima associada à variável/constante
/* 
Obs.: cuidado com a ordem, já que nesta sintaxe
a função primeiro precisa ser declarada para somente DEPOIS ser chamada/executada */
const exemplo1 = function(){
    console.log("função anônima!");
}

exemplo1();

/* Sintaxe declarada/nomeada */
exemplo2();
function exemplo2(){
    console.log("Função nomeada!");
}

let guardaValor = (valor1, valor2) => {
    // if(valor1 < valor2){
    //     let oto = valor1;
    //     valor1 = valor2;
    //     valor2 = oto;
    // }
    let calculo = valor1 - valor2;
    return calculo;
};

let resultado1 = guardaValor(50, 90);
let resultado2 = guardaValor(70, 50);

console.log(resultado1, resultado2);

/* Sintaxe Arrow Function */

const exemplo3 = () => {
    console.log("Arrow Function!");
};

exemplo3();

// const saudacao = (cliente) => {
//     console.log("Olá " + cliente);
// };

// Omitir os parênteses do parâmetro (SOMENTE QUANDO FOR 1)
/* const saudacao = cliente => {
    console.log("Olá " + cliente);
} */

// Omitir as { } (SOMENTE QUANDO FOR UMA ÚNICA INSTRUÇÃO)
const saudacao = cliente => console.log("Olá " + cliente);
saudacao("Fulano");
saudacao("Beltrano");

const calcularMetade = (valor) => {
    return valor / 2;
};

let resultadoA = calcularMetade(100);
let resultadoB = calcularMetade(999);

console.log(resultadoA);
console.log(resultadoB);