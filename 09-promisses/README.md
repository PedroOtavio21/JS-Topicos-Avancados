# Aula 9 - Promisses
Uma Api do JavaScript que possibilita uma maneira de trabalhar com códigos assíncronos.

Uma promisse é um objeto com uma função associada a ela, onde essa função será executada de forma assíncrona e retornar um valor para ser trabalhado em seguida (Ou seja, será executado ao mesmo tempo em relação aos outros blocos de código).

Geralmente é utilizada para executar um determinado código a partir do resultado do código assíncrono da promisse

Para que ela funcione, precisa trabalhar com tipos de "estados/momentos de seu ciclo de vida", como **pending, resolved ou rejected**
- Uma promisse resolvida é uma promisse onde foi executada e teve sucesso, retornando o valor
- Já uma promisse rejeitada foi executada e teve um problema ao decorrer de sua execução

Para finalizar uma promisse, é necessário utilizar a função resolve como parâmetro na promisse, para então finalizar sua execução.

Ex.:
```js
const p = new Promise((resolve) => {
    console.log('A promisse está sendo executada')
    setTimeout(() => {
        console.log("Resolvendo a promise...")
        resolve(true) // Pode ter qualquer valor passado na função
    }, 1000 * 2)
})

console.log(p)

setTimeout(() => {
    console.log(p) // Mostra o estado da promisse instanciada anteriormente
}, 1000 * 2)
```

O exemplo mais comum de uso das promisses é quando são chamadas dentro de outra função, visto que são chamadas imediatamente em seua execução

```js
function execute(){
    // faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log("A promise está sendo executada...")
        setTimeout(() => {
            console.log("Resolvendo a promise...")
            resolve("Resultado")
        }) // Se prestar a atenção, o código executa o mesmo resultado do exemplo acima, porém aplicando o uso de mercado da promise
    })
}

const p = execute()
console.log(p)
```