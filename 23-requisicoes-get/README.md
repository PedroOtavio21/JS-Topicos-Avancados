# Aula 23 - Reaquisições get com JavaScript
Após as aulas anteriores, onde foi feita uma revisão sobre reaquisições HTTP e uma visão geral sobre APIs Restfull, criaremos uma função que fará uma reaquisição para uma API Restfull e tratar sua resposta

Como exemplo iremos utilizar a Rest Countries, uma API pública que não necessita de autenticação e nos retorna dados sobre os países do mundo.

Assim que criar um arquivo js, necessário criar uma função assíncrona para fazer a requisição da API, pois a tal irá retornar uma promise!
```js

async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all') // A função fetch é a responsável por retornar a requisição http!
  const countries = await response.json() // Transforma as informações recebidas pela requisição em código compatível ao javascript, JSON!
  console.log(response)
}

getCountries()
``` 

Para renderizar os dados, o professor utilizou o seguinte código:
```js
function createCountryCard(country) {
  // Criação de div que irá comportar todos os elementos da API (countries) 
  const card = document.createElement('div')
  card.classList.add('country')

  // Título de cada country  
  const countryName = country.name.common
  const name = document.createElement('h2')
  name.textContent = countryName

  // Imagem que ficará contida em cada card
  const flag = document.createElement('img')
  flag.src = country.flags.svg
  flag.alt = countryName

  // Append para colocar cada elemento da API no documento html
  card.append(name, flag)
  document.querySelector('#countries').append(card)
}

async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries = await response.json()

  console.log(countries)
  // Um forEach é aplicado a cada elemento da API, fazendo com oque todos os elementos apareçam no documento html
  countries.forEach(createCountryCard)
}

getCountries()
```

**Nota:** Ao realizar o código em minha máquina, não tive sucesso em realizar a requisição de informações da API, tendo que rever isso depois no decorrer das aulas