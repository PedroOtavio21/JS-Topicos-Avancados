# Aula 16 - Rejeitando promises async
Nesta aula, será testado como rejeitar promises, utilizando as funções async aprendidas na última aula do módulo

Praticamente bem parecido com oque tem sido feito até então, porém no condicional, você utiliza a chamada do método resolve no objeto promise, e retornando seu resultado.

Ex.:
```js
async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('arguments must be of type number') // Tratamento de rejeição é feita similar às outras aulas sobre promises
    }
    return a - b
}

const subtractResult = asyncSubtract(50, false) 

Promise.all([subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err) 
})
```