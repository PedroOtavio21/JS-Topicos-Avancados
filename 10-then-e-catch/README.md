# Aula 10 - Métodos then e catch
Forma elaborada de trabalhar com os resultados das promisses, sendo os método .then() e .catch() das promises!

## then
Método das promises, utilizado para lidar com uma promise quando ela é resolvida

Ex.:
```js
function execute(){
    return new Promise((resolve, reject) => {
        console.log('A primisse está sendo executada...')
        setTimeout(() => {
            console.log('Resolvendo a primisse...')
            resolve(42) // Resultado da promisse ao ser resolvida
        }, 1000 * 2)
    })
}

const p = execute()

p.then((resolve) => { // O resultado da promise é passado como parâmetro
    console.log(`A promise foi resolvida. O resultado foi: ${resolve}`)
})
```

## catch
Similiar ao método then, porém lida com resultados de blocos de códigos rejeitados pela promise

Ex.:
```js
function execute(){
    return new Promise((resolve, reject) => {
        console.log('A primisse está sendo executada...')
        setTimeout(() => {
            if(true){
                reject(false)
            } else {
                console.log('Resolvendo a primisse...')
                resolve(42)
            }
        }, 1000 * 2)
    })
}

const p = execute()

p.then((resolve) => {
    console.log(`A promise foi resolvida. O resultado foi: ${resolve}`)
}).catch((err) => { // Esta acaba sendo uma boa prática, visto que o método then retorna a própria promise!
    console.log(`A promise foi rejeitada. O motivo foi: ${err}`)
}) 
``` 

Se você perceber, a função catch funciona de maneira similar ao tratamento de erro em bloco try/catch, pois é possível tratar um determinado bloco de código com erro esperado ou inesperado, sem que o código pare sua execução, ou então imprima uma mensagem adequada.

## finally
Exatamente como você pensou, mesma lógica de bloco finally em tratamento de erro, utilizado para tratar um código, independente se haja um erro presente ou não

Ex.:
```js
function execute(){
    return new Promise((resolve, reject) => {
        console.log('A primisse está sendo executada...')
        setTimeout(() => {
            if(true){
                reject(false)
            } else {
                console.log('Resolvendo a primisse...')
                resolve(42)
            }
        }, 1000 * 2)
    })
}

// Formato padrão de utilização de promises!
execute().then((resolve) => {
    console.log(`A promise foi resolvida. O resultado foi: ${resolve}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada. O motivo foi: ${err}`)
}).finally(() => {
    console.log('A promise foi finalizada')
})
```