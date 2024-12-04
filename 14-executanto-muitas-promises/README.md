# Aula 14 - Executando várias promises
Geralmente, as promises são feitas para serem trabalhadas independentes entre si. Porém, o JavaScript fornece uma maneira de que, se uma das promises não for executada corretamente (ocorrer um reject), as promises deverão parar imediatamente. Ou, simplesmente fornece uma maneira de executar todas as promises em conjunto!

```js
const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)

// Método .all é o nosso astro principal da aula!
Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err) 
})
```

O resultado acima mostrará o erro como se fosse ocasionado nas duas promises na execução, onde na verdade ocorreu apenas na segunda. Isso ocorre devido o fato das duas promises estarem executando ao mesmo tempo.