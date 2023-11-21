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

let calculaDiferenca = (valor1, valor2) => calculo = valor1 - valor2;

let resultado1 = calculaDiferenca(50, 90);
let resultado2 = calculaDiferenca(70, 50);

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

// Arrow function ocm retorno EXPLÍCITO
const calcularMetadeOriginal = (valor) => {
    return valor / 2;
};

// Arrow Function com retorno IMPLÍCITO
const calcularMetade = valor => valor / 2;

let resultadoA = calcularMetadeOriginal(100);
let resultadoB = calcularMetade(999);

console.log(resultadoA);
console.log(resultadoB);

console.log("------------------------------------------");

/* Exercícios
1) Monte uma arrow Function que receba o nome de uma pessoa
e converta este nome para letras maiúsculas. */ 
const converteMaiuscula = nome => console.log(nome.toUpperCase());

/*
2) Chame a função 3x (passando nomes diferentes) e exibindo
no console os resultados.*/
converteMaiuscula("Jhonatan");
converteMaiuscula("Júlia");
converteMaiuscula("Dom");
 