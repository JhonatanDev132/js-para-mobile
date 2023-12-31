# js-para-mobile
 Revisão e recursos novos de JS para Mobile

## Principais tópicos de atenção e estudos

### Variáveis e Constantes

`let` e `const` possuem escopo de BLOCO quando declarado 
dentro de blocos (condicionais, loops), e escopo **GLOBAL** quando declarado fora de blocos.

`var` possui escopo **GLOBAL** mesmo quando declarado dentro de blocos. Portanto, é acessível em praticamente
qualquer lugar dentro da aplicação.

`const` obrigatoriamente precisa ser inicializada com algum valor/expressão, e este valor/expressão **não pode ser modificado**.

### Funções

Blocos de código reaproveitáveis que podem ser criados de pelo menos 3 formas:

- Função nomeada/declarada
- Função Anônima
- Arrow Function

Nas bibliotecas e frameworks as sintaxes mais comuns são Arrow Function e Nomeada.

**Obs.:** caso utilize as sintaxes anônima ou arrow, certifique-se de **primeiro** declarar a função só depois de chamá-la.

### Template Literal/String

Forma mais moderna de manipular dados estáticos e dinâmicos, além de permitir de uma forma mais fácil executar operações dentro de strings/códigos. Lembre-se do uso das **crases** e do bloco `${}` para execuções de código dinâmico (variáveis, constantes, funções e etc).

### Módulo

São uma maneira de separar lógicas/funcionalidades/dados em arquivos dedicados =. Ao criar módulos é necessário utilizar os comandos `export` (no módulo a ser exportado) e `import` (no arquivo que você quer usar o módulo).

Ao exportar apenas **um recurso**, utiliza-se `export default nomeDoRecurso`. Ao exportar **um ou mais** recursos, utiliza-se `export {recurso1, recurso2, recursoN}`.

Ao importar apenas **um recurso**, utiliza-se `import nomeDoRecurso from "local/nomeDoModulo"`. Ao importar **um ou mais** recursos, utiliza-se `import { recurso1, recursoN } from "local/nomeDoModulo"`.

### Operadores spread e rest ...

- spread (espalhar): usado para dividir elementos de um array ou propriedades de um objeto para o outro array/objeto. útil para gerar novas estruturas de dados a partir de estruturas existentes.

- rest(coletar/extrair valores): usado para gerar uma lista de parâmetros para uma função à partir dos valores de um array. Útil para evitar a necessidade de criar parâmetros manualmente em uma função, ou para quando não sabemos quantos parâmetros necessários.

### Desestruturing (Desestruturação)

Técnica para extrair valores de arras e objetos para novas variáveis/constantes. Usada para simplificar o acesso a estes dados, podendo ser aplicada também em parâmetros de funções