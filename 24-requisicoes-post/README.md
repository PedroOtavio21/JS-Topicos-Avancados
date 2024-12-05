# Aula 24 - Reaquisições post
Nessa aula veremos como fazer requisições POST com a função fetch() do javascript e quais são as diferenças para uma requisição GET.

Para ajudar na aula iremos usar um pacote do npm muito útil quando queremos testar interações com APIs, o json-server. Ele permite simular um backend de forma simples e rápida, subindo um pequeno servidor para receber nossas requisições e salvando dados em arquivo. Ele é capaz de receber requisições GET, POST, PUT e DELETE seguindo a arquitetura Rest para trabalhar com quaisquer recursos que quisermos definir.

Após iniciar um projeto no node e instalar o json-server, além de escrever um exemplo de banco de dados em um arquivo db.json: 

```json
{
    "articles": [
      {
        "id": 1,
        "title": "Olá, mundo!",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus inventore voluptatem, eum repellat sed officiis aliquam",
        "author": "Isaac"
      },
      {
        "id": 2,
        "title": "Requisições POST com Javascript",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus inventore voluptatem, eum repellat sed officiis aliquam",
        "author": "Isaac"
      }
    ]
}
```

você realiza o mesmo procedimento da aula anterior, utilizando o fetch para consumir uma api pelo json-server:

```js
function renderArticle(articleData) {
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article-${articleData.id}`
  
    const title = document.createElement('h3')
    title.classList.add('article-title')
    title.textContent = articleData.title
  
    const content = document.createElement('div')
    content.classList.add('article-content')
    content.innerHTML = articleData.content
  
    const author = document.createElement('div')
    author.classList.add('article-author')
    author.textContent = articleData.author
  
    article.append(title, author, content)
    document.querySelector('#articles').appendChild(article)
}
  
async function fetchArticles() {
    const articles = await fetch("http://localhost:3000/articles").then(res => res.json())
    articles.forEach(renderArticle)
}
  
document.addEventListener('DOMContentLoaded', () => {
    fetchArticles()
})
```

Repare que se adicionarmos uma action e um method ao nosso form ele já consegue fazer requisições para o json-server, criando um novo artigo, e como a página é atualizada o novo artigo já aparece na tela. No entando, o que queremos é fazer as requisições POST através do javascript sem atualizar a página. Para isso podemos usar o fetch() novamente, dessa vez com algumas opções a mais:

```js
const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
  ev.preventDefault() // Previne o evento de submit da página

  const articleData = {
    // Seleciona o conteúdo digitado pelo usuário no formulário
    title: document.querySelector('#title').value, 
    author: document.querySelector('#author').value,
    content: document.querySelector('#content').value
  }

  // Realiza o processo de requisição com método post 
  const response = await fetch('http://localhost:3000/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(articleData)
  })

  const savedArticle = await response.json()
  form.reset()
  renderArticle(savedArticle)

  console.log(savedArticle)
})
```