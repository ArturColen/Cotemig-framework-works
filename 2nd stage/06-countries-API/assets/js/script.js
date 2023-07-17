var ulCountries = document.querySelector('#table-countries');
var ulFavoriteCountries = document.querySelector('#table-favorite-countries');
var totalPopulation = document.querySelector('#total-population-list');
var countCountries = document.querySelector('#count-countries');
var countFavoriteCountries = document.querySelector('#count-favorite-countries');
var totalFavoritePopulation = document.querySelector('#total-favorite-population-list');

var globalPopulation = 0;
var countCountry = 0;
var favorites = [];  
var country = [];
var originalCountry = [];

var btnAfrica = document.querySelector('#africa');
var btnAmerica = document.querySelector('#america');
var btnAntartida = document.querySelector('#antartida');
var btnAsia = document.querySelector('#asia');
var btnEurope = document.querySelector('#europe');
var btnOceania = document.querySelector('#oceania');

var inputCountry = document.querySelector('input');

fetch('https://restcountries.com/v2/all')
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        for (var i = 0; i < result.length; i++) {
            country.push(result[i]);
            originalCountry.push(result[i]);
        }

        totalPopulation.textContent = globalPopulation;
        render();
        inputCountry.addEventListener('keyup', displayCountries);
    })

function render() {
    globalPopulation = 0;
    countCountry = 0;
    var countries = `
        <tr>
            <th>Bandeira</th>
            <th>Nome</th>
            <th>População</th>
        </tr>
    `;

    country.forEach((countryItem, index) => {
        if (countryItem != '') {
            globalPopulation += parseInt(countryItem.population);
            countCountry++;

            countries += `
                <tr>
                    <td> <button class="add" onclick="favorite(${index})"> + </button> <img src='${countryItem.flag}'>  </td>
                    <td>${countryItem.name}</td>
                    <td>${countryItem.population}</td>
                </tr>
            `;
        }
    });

    ulCountries.innerHTML = countries;
    totalPopulation.innerHTML = globalPopulation;
    countCountries.innerHTML = countCountry;
}

function renderF() {
    globalPopulation = 0;
    countCountry = 0;
    var countries = `
        <tr>
            <th>Bandeira</th>
            <th>Nome</th>
            <th>População</th>
        </tr>
    `;

    favorites.forEach((FavItem, index) => {
        if (FavItem != '') {
            globalPopulation += parseInt(FavItem.population);
            countCountry++;

            countries += `
                <tr>
                    <td> <button class="remove" onclick="removeFav(${index})"> - </button> <img src='${FavItem.flag}'>  </td>
                    <td>${FavItem.name}</td>
                    <td>${FavItem.population}</td>
                </tr>
            `;
        }
    });

    ulFavoriteCountries.innerHTML = countries;
    countFavoriteCountries.innerHTML = countCountry;
    totalFavoritePopulation.innerHTML = globalPopulation;
}

function favorite(index) {
    favorites[index] = country[index];
    country[index] = '';
    render();
    renderF();
}

function removeFav(index) {
    country[index] = favorites[index];
    favorites[index] = '';
    render();
    renderF();
}

btnAfrica.addEventListener('click', () => {
    const africaCountries = originalCountry.filter(nation => nation.region === 'Africa');
    country = africaCountries;
    render();
});

btnAmerica.addEventListener('click', () => {
    const americaCountries = originalCountry.filter(nation => nation.region === 'Americas');
    country = americaCountries;
    render();
});

btnAntartida.addEventListener('click', () => {
    const antartidaCountry = originalCountry.filter(nation => nation.region === 'Polar');
    country = antartidaCountry;
    render();
});

btnAsia.addEventListener('click', () => {
    const asiaCountries = originalCountry.filter(nation => nation.region === 'Asia');
    country = asiaCountries;
    render();
});

btnEurope.addEventListener('click', () => {
    const europeCountries = originalCountry.filter(nation => nation.region === 'Europe');
    country = europeCountries;
    render();
});

btnOceania.addEventListener('click', () => {
    const oceaniaCountries = originalCountry.filter(nation => nation.region === 'Oceania');
    country = oceaniaCountries;
    render();
});

function displayCountries() {
    var countryName = inputCountry.value.toLowerCase();
    var filteredCountries = country.filter(function (countryItem) {
        if(countryItem != '') {
            return countryItem.name.toLowerCase().indexOf(countryName) !== -1;
        }
    });

    var countriesHTML = '';
    filteredCountries.forEach(function(countryItem) {
        var index = country.indexOf(countryItem);
        countriesHTML += `
            <tr>
                <td> <button class="add" onclick="favorite(${index})"> + </button> <img src='${countryItem.flag}'>  </td>
                <td>${countryItem.name}</td>
                <td>${countryItem.population}</td>
            </tr>
        `;

    });

    ulCountries.innerHTML = `
        <tr>
            <th>Bandeira</th>
            <th>Nome</th>
            <th>População</th>
        </tr>
        ${countriesHTML}
    `;
}