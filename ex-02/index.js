// Crie uma função que cálcula o IMC de uma pessoa, e retorna uma promise de seu IMC
function calculateImc(weight, height){
    return new Promise((resolve, reject) => {
        if(typeof weight !== 'number' || typeof height !== 'number'){
            reject('Valores inseridos não são de tipo numérico.')
        }

        const result = weight / (height * height)
        resolve(result)
    })
}

function imcSituation(weight, height){
    return calculateImc(weight, height).then(resolve => {
        if(resolve < 18.5){
            console.log('Magresa')
        } else if (resolve < 24.9){
            console.log('Normal')
        } else if (resolve < 29.9){
            console.log('Sobrepeso')
        } else if (resolve < 39.9){
            console.log('Obesidade')
        } else {
            console.log('Obesidade grave')
        }
    }).catch(err => {
        console.log(`Erro ao cálcular o IMC do paciente. O motivo foi: ${err}`)
    }).finally(() => {
        console.log(`Fim de execução do código`)
    }) 
}

imcSituation(1.74, 78.2)