 <!--    
Hacer un formulario HTML que le permita a un docente ingresar las notas de los 3 parciales de un estudiante (supongamos que siempre son exactamente 3 parciales). Hacer un programa en PHP que reciba estas notas y que indique si el estudiante aprobó o no, y cuál es su promedio. Para aprobar, debe tener un promedio mayor o igual a 6, y además debe tener una nota mínima de 6 en el último parcial.
 
    $nota1 = $_POST['nota1'];
    $nota2 = $_POST['nota2'];
    $nota3 = $_POST['nota3'];

    $respuesta ['promedio'] = ($nota1 + $nota2 + $nota3) / 3;

    $respuesta ['aprobado'] = $respuesta ['promedio'] >= 6 && $nota3 >= 6;

    // Definimos los headers y mostramos la respuesta como json:
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($respuesta);

 -->
 
<?php

$n1 = $_GET['nota1'];
$n2 = $_GET['nota2'];
$n3 = $_GET['nota3'];

$respuesta['promedio'] = ($n1 + $n2 + $n3) / 3;

// $respuesta['aprobado'] tendrá almacenado true o false:
$respuesta['aprobado'] = $respuesta['promedio'] >= 6 && $n3 >= 6;

header('Content-Type: application/json; charset=utf-8');
echo json_encode($respuesta);