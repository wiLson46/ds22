 <!--    
Hacer un formulario HTML que permita ingresar 3 números. Hacer un programa en PHP que reciba esos números y los muestre ordenados de mayor a menor.

$num1 = $_POST['num1'];
$num2 = $_POST['num2'];
$num3 = $_POST['num3'];

// Ordenar los números de mayor a menor
$numbers = [$num1, $num2, $num3];
rsort($numbers);

    // Definimos los headers y mostramos la respuesta como json:
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($respuesta);

-->

<?php
$n1 = $_GET['n1'];            
$n2 = $_GET['n2'];            
$n3 = $_GET['n3'];            

if ($n1 > $n2 && $n1 > $n3) {
    // Ya sabemos que el mayor es n1
    if ($n2 > $n3) {
        $orden =  [$n1, $n2, $n3];
    } else {
        $orden =  [$n1, $n3, $n2];
    }
} else if ($n2 > $n3) {
    // Ya sabemos que el mayor es n2
    if ($n1 > $n3) {
        $orden =  [$n2, $n1, $n3];
    } else {
        $orden =  [$n2, $n3, $n1];
    }
} else {
    // Por descarte, sabemos que el mayor es n3
    if ($n1 > $n2) {
        $orden =  [$n3, $n1, $n2];
    } else {
        $orden =  [$n3, $n2, $n1];
    }
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($orden);
