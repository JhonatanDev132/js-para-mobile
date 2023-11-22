/* ...spread-> espalhar
Copiar elementos/dados de um array/objeto
para dentro de outro array/objeto. */

const bandas = ["The Strokes", "The Beatles", "Rush"];
const maisBandas = [...bandas, "Slayer", "Nirvana"];

console.log(bandas);
console.log(maisBandas);

// Spread com objetos
const cliente = {
    nome: "Seu Madruga",
    idade: 55,
    cidade: "Vila do Chaves"
};

const novosDados = {
    ...cliente,
    estado: "SP",
    pedido: "123xyz",
    total: 5000.88,
    idade: 60
}

console.log(novosDados);