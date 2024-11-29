# Aula 9 - Promisses
Uma Api do JavaScript que possibilita uma maneira de trabalhar com códigos assíncronos.

Uma promisse é um objeto com uma função associada a ela, onde essa função será executada de forma assíncrona e retornar um valor para ser trabalhado em seguida.

Para que ela funciones, precisa trabalhar com tipos de "estados/momentos de seu ciclo de vida", como pending, resolved ou rejected
- Uma promisse resolvida é uma promisse onde foi executada e teve sucesso, retornando o valor
- Já uma promisse rejeitada foi executada e teve um problema ao decorrer de sua execução

Para finalizar uma promisse, é necessário utilizar a função resolve como parâmetro na promisse, para então finalizar sua execução.

Ex.:
```js
const p = new Promise((resolve) => {
    console.log('A promisse está sendo executada')
    resolve(true)
})

console.log(p)
```