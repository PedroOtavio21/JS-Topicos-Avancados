function createCountryCard(country) {
    const card = document.createElement('div')
    card.classList.add('country')
  
    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName
  
    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName
  
    card.append(name, flag)
    document.querySelector('#countries').append(card)
  }
  
async function getCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
    }
        const countries = await response.json();
        countries.forEach(createCountryCard);
    } catch (error) {
        console.error('Erro ao buscar países:', error.message);
        alert('Ocorreu um problema ao carregar os dados. Tente novamente.');
    }
}
  
getCountries()