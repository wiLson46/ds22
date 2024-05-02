let id = 0;

document.addEventListener('DOMContentLoaded', fetchEpisodes);
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'button') {
        callOne(event.target.id);
    }
});


let apiAllEpisodes = 'https://rickandmortyapi.com/api/episode/';
let apiEpi = '';

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
        id = unDato.id;
        item.innerHTML = unDato.episode + ' - ' + unDato.name + ' - ' + '<button id="' + id + '" type="button" class="btn btn-primary btn-sm" onclick="callOne(id)"> Ver Data </button>';
        item.classList.add('m-2')
        lista.appendChild(item);

    });

    document.querySelector('#board').appendChild(lista);

}
    
function callOne(id) {

    id = id;
    apiEpi = apiAllEpisodes + id;
    fetchEpi();

}

function fetchEpi() {
    fetch(apiEpi)
        .then(response => response.json())
        .then(data => mostrarDataEpisodio(data))
        .catch(error => console.error(error));
}

function mostrarDataEpisodio(data) {
    document.querySelector('#board').innerHTML = '';
    let lista = document.getElementById('board');
    let item = document.createElement('div');
    item.innerHTML = '<b>Primera vez en aire: </b>' + data.air_date;
    item.classList.add('m-2')
    lista.appendChild(item);
};  