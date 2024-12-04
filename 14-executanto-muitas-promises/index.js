// function asyncSum(a,b) {
//     return new Promise((resolve, reject) => {
//         if(typeof a !== 'number' || typeof b !== 'number'){
//             reject('arguments must be of type number')
//         } else {
//             resolve(a + b)
//         }
//     })
// }

// function asyncSubtract(a, b) {
//     return new Promise((resolve, reject) => {
//         if(typeof a !== 'number' || typeof b !== 'number'){
//             reject('arguments must be of type number')
//         } else {
//             resolve(a - b)
//         }
//     })
// }

// const sumResult = asyncSum(50, 33)
// const subtractResult = asyncSubtract(50, 33) // antes era (53, null)

// Promise.all([sumResult, subtractResult]).then(results => {
//     console.log(results)
// }).catch(err => {
//     console.log(err) // Mostrará o erro de execução da segunda promise, como se fosse o resultado de ambas!
// })

const numbers = [4, 9, 5, true, 13, 77]

function asyncSquare(x){
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number'){
            reject(false)
        } else {
            resolve(x * x)
        }
    })
}

// Retorna um array de promises, além de executar a função acima em cada elemento do array
Promise.all(numbers.map(number => asyncSquare(number))).then(squares => { 
    console.log(squares)
}).catch(err => {
    console.log(err)
})