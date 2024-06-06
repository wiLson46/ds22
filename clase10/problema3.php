<!--    
Hacer un formulario HTML que tenga un campo de texto, que permita ingresar cualquier cantidad de números enteros positivos, separados por comas. Hacer un programa en PHP que muestre el máximo, el mínimo, la suma y el promedio de los números ingresados.  

// Definimos los headers y mostramos la respuesta como json:
header('Content-Type: application/json; charset=utf-8');
echo json_encode($resultado);

$ingresoUsuario = $_POST['ingresoUsuario'];

function resultado($ingresoUsuario){
    
    $numeros = explode(",", $ingresoUsuario);
    $maximo = max($numeros);
    $minimo = min($numeros);
    $suma = array_sum($numeros);
    $promedio = $suma / count($numeros);
    
    return [
        "maximo" => $maximo,
        "minimo" => $minimo,
        "suma" => $suma,
        "promedio" => $promedio
    ];

};

-->

<?php
$n = $_GET['numeros'];

//Eliminamos espacios en blanco:
$n = str_replace(' ', '', $n);
//Eliminamos comas al principio o al final...
$n = trim($n, ',');
// ...y agregamos una coma al final:
$n = $n.',';

// Inicializamos:
$suma = 0;
$cant = 0;
$max = -1;
$min = PHP_INT_MAX;
$numero = '';

// Recorremos caracter por caracter el texto recibido ($n):
for ($i = 0; $i < strlen($n); $i++) {
    if ($n[$i] == ',' && strlen($numero) > 0) {
        // Si el caracter es una coma (y no hay dos comas seguidas):
        //Incrementamos acumulador y contador.
        $suma += $numero;
        $cant++;

        //Evaluamos máximo y mínimo, los forzamos a enteros:
        if ($numero > $max) {
            $max = (int) $numero;
        }
        if ($numero < $min) {
            $min = (int) $numero;
        }

        // Vaciamos el número, ya que no necesitamos almacenar cada número:
        $numero = '';
    } else if (is_numeric($n[$i])) {
        // En cambio, si el caracter es un dígito, lo concatenamos al número:
        $numero = $numero . $n[$i];
    }
    // El if anterior no tiene else: si el caracter no es ni una coma ni un
    // número, simplemente se ignora.
}

$promedio = $suma / $cant;

$respuesta = [
    'suma' => $suma,
    'promedio' => $promedio,
    'maximo' => $max,
    'minimo' => $min,
];


header('Content-Type: application/json; charset=utf-8');
echo json_encode($respuesta);