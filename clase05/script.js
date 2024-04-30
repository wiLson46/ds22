// Create an async function to fetch data
document.querySelector('#goPoke').addEventListener('click', fetchData);

function fetchData() {
    let valor = document.getElementById('inputPoke').value;

    console.log('valor de input:', valor);

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + valor;

    console.log('Fetching data from:', apiUrl);

    // Show "loading result" message
    let loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Loading result...';
    let container = document.getElementById('board');
    container.appendChild(loadingMessage);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Store the fetched data in the variable 'x'
            let x = data; // You can access specific properties from 'data' as needed

            // Remove the "loading result" message
            container.removeChild(loadingMessage);

            // Create a div element
            let divElement = document.createElement('div');
            divElement.textContent = 'Pokemon name:' + x.name; // Display the ability name

            // Append the div to the container
            container.appendChild(divElement);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}