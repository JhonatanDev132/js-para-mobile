import pessoa from "./modulos/dados.js";

console.log(pessoa);

console.log("------------------------------------------");

for( const prop in pessoa){
    console.log(pessoa[prop]);
}