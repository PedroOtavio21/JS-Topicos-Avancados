# Exercício 3 - Refatorando as Promises
Reescreva o códigodo exercício anterior, utilizando as funções async, await e fazendo as devidas alterações no código.

Código do exercício anterior:
```js
function calculateImc(weight, height){
    return new Promise((resolve, reject) => {
        if(typeof weight !== 'number' || typeof height !== 'number'){
            reject('Valores inseridos não são de tipo numérico.')
        } else {
            resolve(weight / (height * height))
        }
    })
}

function imcSituation(weight, height){
    calculateImc(weight, height).then(result => {
        console.log(`O resultado do cálculo de IMC foi de: ${result}`)
        if(result < 18.5){
            console.log('Situação: Magresa')
        } else if (result < 25){
            console.log('Situação: Normal')
        } else if (result < 30){
            console.log('Situação: Sobrepeso')
        } else if (result < 40){
            console.log('Situação: Obesidade')
        } else {
            console.log('Situação: Obesidade grave')
        }
    }).catch(err => {
        console.log(`Erro ao cálcular o IMC do paciente. O motivo foi: ${err}`)
    }).finally(() => {
        console.log(`Fim de execução do código`)
    }) 

    console.log('Calculando...')
}
```