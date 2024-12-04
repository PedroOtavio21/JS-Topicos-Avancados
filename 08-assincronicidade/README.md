# Aula 8 - Assincronicidade no JavaScript
Um código **sincrono** é um código padrão no javascript, que é executado de maneira linear, ou seja, executado seguido de uma leitura de **linha após linha** no escopo do código.

Ex.:
```js
function setp02(){
    console.log('Passo 02')
}

// Código será executado normalmente da linha 11 à 13
console.log('Passo 01')
setp02()
console.log('Passo 03')
```

No caso da assincronicidade, seria o contrário de um código acima, onde não trava o fluxo comum de uma determinada aplicação

Geralmente este tipo de aplicação é usada para acelerar a execução de um código, onde um determinado bloco de código não espera que a execução de outro bloco de código termine, sendo executado ao mesmo tempo!

Ex.:
```js
console.log('Passo 04')

// O código abaixo é dado como um código assincrono, onde ao executar não trava a execução anterior, além de executar ao mesmo tempo que o restante do bloco de código no escopo de execução.
setTimeout(() => {
    console.log('Passo 05')
}, 2000)
console.log('Passo 06')
```