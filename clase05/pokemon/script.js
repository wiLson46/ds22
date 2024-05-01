
document.querySelector('#goPoke').addEventListener('click', fetchData);

function fetchData() {

    let valor = document.getElementById('inputPoke').value;
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + valor;

    let loadingMessage = document.createElement('div');
    loadingMessage.innerHTML = '<img src="loader.gif" alt="Loading..." class="loaderSpin" > Cargando Resultado...';
    let container = document.getElementById('board');
    container.appendChild(loadingMessage);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            function checkType(mainType) {
                if (mainType == 'fire') {
                    return divElement.classList.add("fireType");
                } else if (mainType == 'water') {
                    return divElement.classList.add("waterType");
                } else if (mainType == 'grass') {
                    return divElement.classList.add("grassType");
                }
            };

            let x = data;

            container.removeChild(loadingMessage);

            let imgData = x.sprites.front_default;
            let pokeTypes = x.types.map(type => type.type.name); // Access all types of the Pokemon
            let pokeType = pokeTypes.join(', '); // Join the types with a comma
            let mainType = x.types[0].type.name;

            let divElement = document.createElement('div');
            divElement.classList.add("pokeCard", "d-flex", "flex-column", "m-2", "justify-content-center", "align-items-center");
            divElement.innerHTML = '<p class="noMarginText"><b>Pokemon name: </b>' + x.name + '</p>' + '<img src="' + imgData + '" alt="pokemon" class="imgPoke" >' + '<p class="noMarginText"><b>Type: </b>' + pokeType + '</p>';
            checkType(mainType);
            container.appendChild(divElement);

        })

        .catch(error => {
            console.error('Error fetching data:', error);
        });

        document.getElementById('inputPoke').value = "";
        document.getElementById('inputPoke').focus();
};