//https://fortniteapi.io/v2/shop?lang=es&includeRenderData=true&includeHiddenTabs=false
let loadingMessage = document.createElement('div');
loadingMessage.innerHTML = '<img src="loader.gif" alt="Loading..." class="loaderSpin" > Cargando Resultado...';
let container = document.getElementById('board');
container.appendChild(loadingMessage);

fetch('https://fortniteapi.io/v2/items/list?lang=es', {

    headers: {
        'Authorization': 'dd3c45d5-48a2030c-3b1dfe52-eb008e7f'
    }

})
    .then(response => response.json())
    .then(data => { processData(data); })
    .catch(error => { console.error(error) });


function processData(data) {

    container.removeChild(loadingMessage);

    data.items.forEach(dato => {
        item = document.createElement('div');
        item.classList.add('m-2', 'col-8', 'cuadro', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center');

        item.innerHTML = '<p class="noMarginText"><b>Nombre del item: </b></p>' + '<p class="noMarginText">' + dato.name + '</p>' + '<img src="' + dato.images.icon + '" class="imgItem" >' + '<p class="noMarginText"><b>Rareza: </b>' + dato.rarity.name + '</p>';

        document.querySelector('#board').appendChild(item);

    });

    console.log(data);
}