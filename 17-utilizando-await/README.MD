# Aula 17 - Utilizando o await
Recurso moderno utilizado para trabalhar em conjunto com as funções async para tornar o trabalho com os procedimentos assíncronos ainda mais fáceis no código, ajudando bastante no dia a dia

Basicamente, o *await* é uma palavra reservada no JavaScript, onde é trabalhada em conjunto às funções async para esperar para a execução de uma promise

Segue um exemplo de código sem o await:
```js
async function execute() {
    asyncSum(50, 33).then(result => {
        console.log(result)
    })
}
```

Agora com o await
```js
async function execute(){
    const result = await asyncSum(50, 33)
    console.log(result)
}
```

Note que os dois códigos geram o mesmo resultado, porém o await só funciona dentro de funções async. Além disso, o await trava a execução do código, por esperar que uma determinada função termine de ser executada.

Para tratar erros/rejeições dentro das promises, simplesmente você terá de trabalhar novamente com os blocos try/catch. Na execução, é como se a rejeição das promises fossem entendidas como erros no bloco de tratamento de erros

Ex.:
```js
async function execute(){
    try{
        const result = await asyncSum(50, null)
        console.log(result)
    } catch(err){
        console.log(err)
    }
}
```