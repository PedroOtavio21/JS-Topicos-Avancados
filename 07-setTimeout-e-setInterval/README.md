# Aula 7 - Funções setTimeout e setInterval
Funções com funcionalidades bastante interessantes em javascript.

## setTimeout
Função disponibilizada globalmente no javascript, responsável por gerar um temporizador, onde irá esperar um tempo determinado para executar um bloco de código

Possui como primeiro parâmetro uma função (high-order function), onde executará o bloco de cógigo determinado em um certo período de tempo, e como segundo parâmetro o tempo em milisegundos

Ex.:
```js
console.log("Olá amigo.")

setTimeout(() => {
    console.log("Se passaram 3 segundos que eu lhe dei saudações!")
}, 1000 * 3)
```

O setTimeout também possui um retorno, sendo um número que servirá como o seu identificador

Caso de uso de seu número:
```js
const timeoutId = setTimeout(() => {
    console.log("Está função não será executada em 3 segundos.")
}, 1000 * 3)

clearTimeout(timeoutId)
```

## setInterval
Uma função com estrutura bem parecida se comparado ao setTimeout, porém executa repetidas vezes após um determinado tempo!

Ou seja, possui como parâmetro uma função e o seu tempo, além de retornar seu identificador como valor

Outro fator legal também, é que a função clear também pode ser chamada dentro do setInterval!

```js
let seconds = 0

const intervalId = setInterval(() => {
    seconds += 1
    console.log(`Se passaram ${seconds} segundos`)
    if(seconds >= 10){
        clearInterval(intervalId)
        console.log("Tempo de execução excedido. Encerrando...")
    }
}, 1000)
```