async function calculateImc(weight, height){
    if (typeof weight !== 'number' || typeof height !== 'number'){
        return Promise.reject('Valores inseridos não são de tipo numérico')
    }
    return weight / (height * height)
}

async function imcSituation(weight, height){
    try{
        console.log(`Cálculando IMC de Paciente com peso ${weight} e altura ${height}...`)
        
        const result = await calculateImc(weight, height)
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
    } catch (err) {
        console.log(err)
    }

}

imcSituation(78.2, 1.74)