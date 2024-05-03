
document.querySelector('#goSearch').addEventListener('click', buscar);
let container = document.getElementById('board');
let loadingMessage;
let id;
let nombreAut;
let donde;

function load() { //agregar donde ()

   // donde =
        loadingMessage = document.createElement('div');
    loadingMessage.innerHTML = '<img src="loader.gif" alt="Loading..." class="loaderSpin" > Cargando Resultado...';
    container.appendChild(loadingMessage);
  // document.querySelector('#contenidoModal').appendChild(lista); arreglar
}

function llamadaIndividual(id) {

    id = id;

    let valor = document.getElementById('inputAutor').value;
    let apiUrl = 'https://openlibrary.org/search.json?author=' + valor;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => { mostrarIndividual(data); })
        .catch(error => { console.error('Error fetching data:', error) });

}

function mostrarIndividual(data) {

    let lista = document.createElement('ul');
    let item;

    data.docs.forEach(unDato => {
        item = document.createElement('li');
        item.classList.add('m-2');

        item.innerHTML = unDato.title + ' (' + unDato.first_publish_year + ')';
        lista.appendChild(item);

    });

    container.removeChild(loadingMessage);
    document.querySelector('#contenidoModal').appendChild(lista);


}

function buscar() {

    load();
    let valor = document.getElementById('inputAutor').value;
    let apiUrl = 'https://openlibrary.org/search.json?author=' + valor;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => { mostrar(data); })
        .catch(error => { console.error('Error fetching data:', error) });

}

// se puede usar lo que ya tenia. agarrar title y publish year

function mostrar(data) {

    container.removeChild(loadingMessage);

    let lista = document.createElement('ul');
    let item;

    data.docs.forEach(unDato => {
        item = document.createElement('li');
        item.classList.add('m-2');

        id = unDato.author_key;

        item.innerHTML = unDato.author_name + ' - ' + '<button id="' + id + '" type="button" class="btn btn-primary btn-sm" onclick="llamadaIndividual(id)" data-bs-toggle="modal" data-bs-target="#elModal"> Ver Data </button>';
        lista.appendChild(item);
    });

    document.querySelector('#board').appendChild(lista);

}

document.getElementById('inputAutor').value = "";
document.getElementById('inputAutor').focus();
