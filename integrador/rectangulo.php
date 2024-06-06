<!--
Utilizando el formulario HTML que sigue, en el que se permite ingresar la base y la altura de un rectángulo, se solicita generar un script PHP que muestre en formato JSON los siguientes datos:
Un valor llamado error, que tenga el valor true si los datos recibidos no corresponden a un rectangulo (ej: la base es igual a cero). De lo contrario, tendrá el valor false.
Un valor llamado superficie, que contenga la superficie del rectángulo.
Un valor llamado perímetro, que indique el perímetro de la figura.
Un valor llamado es_cuadrado, que valga true si el rectángulo es además un cuadrado, false de lo contrario.
-->

<?php

$base = $_POST['base'];
$altura = $_POST['altura'];

$respuesta['superficie'] = $base * $altura;
$respuesta['perimetro'] = ($base * 2) + ($altura * 2);
$respuesta['es_cuadrado'] = $base == $altura;

// Validamos los errores:
$error = revisarErrores($base, $altura);

// Agregamos los errores a la respuesta:
$respuesta['error'] = $error;

// Definimos los headers y mostramos la respuesta como json:
header('Content-Type: application/json; charset=utf-8');
echo json_encode($respuesta);

function revisarErrores($base, $altura)
{

    if ($base <= 0) {
        $error = true;
    }
    if ($altura <= 0) {
        $error = true;
    }

    else {
        $error = false;
    }

    return $error;
    
}

?>

