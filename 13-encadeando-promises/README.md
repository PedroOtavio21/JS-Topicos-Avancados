# Aula 13 - Encadeamento de promises
Nada mais que encadear várias promises em sequencia!

No dia a dia de um desenvolvedor, é bastante comum esta prática de trabalhar com funções que retornam uma promise, e com seu resultado trabalhar com uma outra função da mesma maneira, e assim por diante...

O javascript acaba facilitando isso, evitando situações como chamadas excessivas de funções por dentro de seus blocos de código, como abaixo:

```js
// Prática extremamente cansativa de se realizar
getAge('2002-06-08').then( age => {
    checkAge(age).then(isOver18 => {
        // function.then(() => {
            // function.then(() => {})}) ... Uma bagunça sem fim
        if (isOver18) {
            console.log('Maior de idade')
        } else {
            console.log('Menor de idade')
        }
    }).catch(err => {
        console.log(err.message)
    })
}).catch(err => {
    console.log(err.message)
})
```

Agora, a prática correta seria:

```js
getAge('2002-05-08').then(age => {
    return checkAge(age) // O retorno é a chave para realizar o encadeamento.
}).then((isOver18) => { // .then() encadeado, onde trabalhará com o resultado da função checkAge
    if (isOver18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
}).catch(err => {
    console.log(err.message)
})
```