import { pessoa, livro, alunos as reprovados } from "./modulos/dados.js";
import alunos from "./modulos/alunos.js";
// import { converteMaiusculas, converteMinusculas, formataMoeda } from "./modulos/funcoes.js";

/* importação das funções através do apelido/alias */
import * as minhasFuncoes from "./modulos/funcoes.js";

console.log(pessoa);

console.log("------------------------------------------");

console.log(livro);

console.log("------------------------------------------");

console.log(alunos); // usando o módulo alunos através do apelido
console.log("------");
console.log(reprovados); // usando o apelido 
console.log("------------------------------------------");
for( const prop in pessoa){
    console.log(pessoa[prop]);
}

console.log("------------------------------------------");

console.log( minhasFuncoes.converteMaiusculas(reprovados[0]) );
console.log( minhasFuncoes.converteMinusculas(alunos[0]) );

let preco1 = 1200.88;
let preco2 = 1000000.66;
let preco3 = 500.8452;

console.log( minhasFuncoes.formataMoeda(preco1) );
console.log( minhasFuncoes.formataMoeda(preco2) );
console.log( minhasFuncoes.formataMoeda(preco3) );