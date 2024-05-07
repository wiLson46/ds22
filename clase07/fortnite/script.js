//https://fortniteapi.io/v2/shop?lang=es&includeRenderData=true&includeHiddenTabs=false

fetch('https://fortniteapi.io/v2/items/list?lang=es', {
    headers: {
        'Authorization': 'dd3c45d5-48a2030c-3b1dfe52-eb008e7f'
    }
})
    .then(response => response.json())
    .then(data => { processData(data); })
    .catch(error => { console.error(error) });


function processData(data){
    console.log(data);
}