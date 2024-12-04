# Aula 15 - Funções async
Até o momento, as promises tem sido trabalhadas no curso de sua maneira mais comum, sendo criadas e retornadas dentro de funções, além de ligarem a elas os métodos then e catch.

Em versões mais recentes, o JavaScript disponibilizou maneiras ainda mais fáceis de trabalhar com funções assíncronas

Exemplo sem nova técnica:
```js
// Exemplo de código utilizado em outra aula:
function asyncSum(a,b) {
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number'){
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}
```

Exemplo atualizado:
```js
async function asyncSum(a,b){
    return a + b
}