# Aula 18 - Utilizando o promise.all com async e await
Na aula, nos foi apresentado uma curiosidade sobre trabalhar com promise all em conjunto das funções async e await, onde ao invés de acumularem um tempo maior em sua execução, demoraram em torno de 2 segundos, oque foi o tempo regristrado para cada uma das funções. Ou seja, todas executaram ao mesmo tempo!

```js
function waitFor(seconds){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const arr = [4,5,9,13,77]

async function execute(){
    console.time('map')
    const squares = await Promise.all(arr.map(async (number) => {
        await waitFor(2)
        return number * number
    }))
    
    console.log(squares)
    console.timeEnd('map')
}

execute()
```