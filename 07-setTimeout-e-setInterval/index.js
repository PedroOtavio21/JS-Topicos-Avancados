console.log("Programa iniciado!")

// const timeoutId = setTimeout(() => {
//     console.log("3 segundos se passaram desde que o programa foi iniciado")
// }, 1000 * 3)

// clearTimeout(timeoutId) // Ocorre uma limpeza do código, nn executando a função acima em 3 segundos

let seconds = 0

const intervalId = setInterval(() => {
    seconds += 1
    console.log(`Se passaram ${seconds} segundos`)
    if(seconds >= 10){
        clearInterval(intervalId)
        console.log("Tempo de execução excedido. Encerrando...")
    }
}, 1000)