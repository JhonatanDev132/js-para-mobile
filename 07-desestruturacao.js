/* Destruturing ou Desestruturação
Extrair os dados de arrays e objetos para variáveis/constantes individuais */

// Destruturing em arrays
const alunos = ["Jhonatan", "Bueno", "Phelipe"];
const [jhonatan, bueno, phelipe] = alunos;

console.log(jhonatan);
console.log(bueno);
console.log(phelipe);

const unidades = ["Penha", "Tatuapé", "Itaquera", "São Miguel"];
const [penha, tatuape, , saoMiguel] = unidades;

console.log("-------------------------------");

console.log(penha);
console.log(tatuape);
console.log(saoMiguel);

console.log("===============================");

const [tesla, einstein, newton] = ["Tesla", "Einstein", "Newton"];
console.log(tesla);
console.log(einstein);
console.log(newton);

console.log("===============================");

const recursos = [
    ["Notebook", "TV Led", "Computador Desktop"],
    texto => texto.toUpperCase()
];

console.log(recursos); // Array completo

console.log("===============================");

// Destruturing
const [produtos, converter] = recursos;

// Acessando através da constante que foi gerada pelo destruturing
console.log(produtos[1]); // TV Led

for(const produto of produtos){
    console.log(`Produto: ${produto}`);
}

console.log(converter("Tiago"));
console.log(converter("geladeira"));
console.log(converter(produtos[0]));
