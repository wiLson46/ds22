

document.addEventListener('DOMContentLoaded', fetchEpisodes);

let apiAllEpisodes = 'https://rickandmortyapi.com/api/episode/';

function fetchEpisodes() {
    fetch(apiAllEpisodes)
        .then(response => response.json())
        .then(data => mostrarEpisodios(data))
        .catch(error => console.error(error));
}

function mostrarEpisodios(data) {
    let lista = document.createElement('ul');
    let item;

    data.results.forEach(unDato => {
        item = document.createElement('li');
        item.innerHTML = unDato.episode + ' - ' + unDato.name;
        lista.appendChild(item);
        console.log(data);
    });

    document.querySelector('#board').appendChild(lista);
}