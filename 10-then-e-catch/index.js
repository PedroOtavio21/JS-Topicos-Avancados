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