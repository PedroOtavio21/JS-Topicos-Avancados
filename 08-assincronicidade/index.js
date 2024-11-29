function setp02(){
    console.log('Passo 02')
}

// Execução linear
console.log('Passo 01')
setp02()
console.log('Passo 03')

// Execução assíncrona
console.log('Passo 04')
setTimeout(() => {
    console.log('Passo 05')
}, 2000)
console.log('Passo 06')