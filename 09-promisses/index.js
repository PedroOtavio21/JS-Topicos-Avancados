// const p = new Promise((resolve) => {
//     console.log('A promisse está sendo executada')
//     resolve(true)
// })

function execute(){
    // Faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log('A primisse está sendo executada...')
        setTimeout(() => {
            console.log('Resolvendo a primisse...')
            resolve('Resultado')
        }, 1000)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 2000)