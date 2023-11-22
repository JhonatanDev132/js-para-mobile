const pessoa = {
    nome: 'Jhonatan',
    idade: 18,
    cidade: 'São Paulo'
};

const livro = {
    titulo: "Harry Potter",
    volume: "A Ordem da Fenix",
    ano: 2003
};

const alunos = ["Tanaka", "Victor", "Eliel", "Aline"];

/* Se for exportação de somente UM recurso
usamos export default nomeDoRecurso */
// export default pessoa;

/* Se for exportação de vários recursos,
use somente export { entre chaves os recursos } */
export {pessoa, livro, alunos};