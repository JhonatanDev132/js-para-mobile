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

console.log("+++++++++++++++++++++++++++++++");

const [tesla, einstein, newton] = ["Tesla", "Einstein", "Newton"];
console.log(tesla);
console.log(einstein);
console.log(newton);