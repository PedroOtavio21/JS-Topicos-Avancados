const p = new Promise((resolve) => {
    console.log('A promisse está sendo executada')
    resolve(true)
})

console.log(p)