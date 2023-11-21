// 01-var-let-const.js

var idade = 18; // ESCOPO GLOBAL
let mensagem;
if( idade > 18){
    mensagem = "Você é maior de idade"; // ESCOPO DE BLOCO
} else {
    mensagem = "Você é menor de idade"; // ESCOPO DE BLOCO
}

console.log(idade);

/* Dará erro pois a mensagem só existe dentro do bloco if/else */
// console.log(mensagem);

let meuNome = "Jhonatan";
console.log(meuNome);

// Retribuição NÃO É possivel em constantes
// meuNome = "Jhonatan Vinicius de Sousa Oliveira";
console.log(meuNome);

// Constantes sempre são declaradas com algum valor
// E este valor NÃO PODE SER modificado
const escola = "Senac"