// EJERCICIO 1

document.querySelector('#colores').addEventListener('click', cambiarColores);

function cambiarColores() {
    const parrafos = document.querySelectorAll('p');
    let contador = 0;
    let color;
    while (contador < parrafos.length) {
        if (contador % 2 == 0) {
            color = 'red';
        } else {
            color = 'blue';
        }
        parrafos[contador].style.color = color;
        contador++;
    }
}

// EJERCICIO 2 + 3 

document.querySelector('#buttonAdd').addEventListener('click', agregado);

function chequearCantidad() {
    let cantidad = document.querySelectorAll('#lista .elemento').length;
    document.getElementById('cantidad').innerHTML = cantidad;
}

function agregado() {

    let valor = document.getElementById('inputAdd').value
    let lista = document.getElementById('lista');
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = valor;
    nuevoElemento.innerHTML += '<span class="quitar" onclick="borrar(this.parentElement)"> X</span>'
    nuevoElemento.classList.add('elemento');
    lista.appendChild(nuevoElemento);
    chequearCantidad();

}

function borrar(elemento) {

  elemento.remove();
  chequearCantidad();

}

// EJERCICIO 4

document.querySelector('#imgChica').addEventListener('click', cambiarAchica);

function cambiarAchica() {
    document.getElementById('imagenBase').classList = [];
    document.getElementById('imagenBase').classList.add("imagenChica");
}

document.querySelector('#imgGrande').addEventListener('click', cambiarAgrande);

function cambiarAgrande() {
    document.getElementById('imagenBase').classList = [];
    document.getElementById('imagenBase').classList.add("imagenGrande");
}