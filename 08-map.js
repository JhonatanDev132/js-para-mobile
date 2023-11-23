import cursos from './modulos/cursos.js';

/* map (mapear, mapeia - transformar em outra coisa)
Passa por elementos de um array e realiza 
operações em cada um deles através de uma função(callback),
gerando um novo array. */

// Exemplo 1
const numeros = [10, 20, 5, 12, 66, 50];
console.log(numeros);

const numerosDobrados = numeros.map( numero => numero * 2 );
console.log(numerosDobrados);

console.log("--------------------------------");

// Exemplo 2: gerar um novo array apenas com os nome dos cursos

const titulos = cursos.map( curso => curso.titulo );

console.log(titulos);

/* Exercício
Use o map para gerar um novo array apenas com os preços calculados com o desconto de 10%. */

// const preco = cursos.map( curso => curso.preco * 0.9);
// console.log(preco);

const dadosNovos = cursos.map( curso => {

    return {...curso, preco: curso.preco - curso.preco * 0.10}
});
console.log(dadosNovos);

