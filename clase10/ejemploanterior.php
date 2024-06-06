<?php

// Guardamos los valores recibidos por post en variables.
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$cuotas = $_POST['cuotas'];
$correo = $_POST['correo'];
$provincia = $_POST['provincia'];
$interes = $_POST['interes'];

// $estudiante guardará true o false, según si está definido:
$estudiante = isset($_POST['estudiante']);

// Si $_POST['tipo'] no existe o es vacío, guardamos la cadena vacía. Si no,
// guardamos el valor recibido:
$tipo = empty($_POST['tipo']) ? '' : $_POST['tipo'];

// Validamos los errores:
$errores = revisarErrores($nombre, $apellido, $tipo, $cuotas); 

// Si no hubo errores, calculamos la respuesta.
if (count($errores) == 0) {
    $respuesta = calcular_precios($provincia, $cuotas, $estudiante);
}

// Agregamos los errores a la respuesta:
$respuesta['errores'] = $errores;

// Definimos los headers y mostramos la respuesta como json:
header('Content-Type: application/json; charset=utf-8');
echo json_encode($respuesta);

/**
 * Revisa que los valores recibidos por POST pasen las validaciones:
 *
 * @return Array Retorna un array con los errores (puede estar vacío si no hay
 *               errores).
 */
function revisarErrores($nombre, $apellido, $tipo, $cuotas)
{
    $errores = [];

    if (strlen($nombre) < 3) {
        $errores[] = "Error: el nombre debe tener al menos 3 letras";
    }
    if (strlen($apellido) < 2) {
        $errores[] = "Error: el apellido debe tener al menos 2 letras";
    }

    if (tiene_numeros($nombre)) {
        $errores[] = "Error: El nombre contiene números";
    }
    if (tiene_numeros($apellido)) {
        $errores[] = "Error: El nombre contiene números";
    }

    if (!empty($_POST['tipo'])) {
        $tipo = $_POST['tipo'];
    } else {
        $errores[] = "Error: debe elegir un tipo de suscripción";
    }

    if (!is_numeric($cuotas) || $cuotas <= 0) {
        $errores[] = "Error: la cantidad de cuotas debe ser un nro > 0";
    }

    return $errores;
}

/**
 * Esta función calcula el precio de la suscripción.
 *
 * @return Array Retorna un array que contiene el precio base, el total de
 *               recargos, el total de descuentos y el precio final.
 */
function calcular_precios($provincia, $cuotas, $es_estudiante)
{
    $descuento = 0;
    $recargo = 0;
    $precio_base = 1000;
    $descuento_contado = 0.05;
    $max_cuotas_sin_recargo = 6;
    $recargo_muchas_cuotas = 0.1;
    $recargo_envio = 200;
    $descuento_estudiante = 0.15;

    if ($cuotas == 1) {
        $descuento += $precio_base * $descuento_contado;
    }
    if ($provincia != 's') {
        $recargo += $recargo_envio;
    }
    if ($cuotas > $max_cuotas_sin_recargo) {
        $recargo += $precio_base * $recargo_muchas_cuotas;
    }
    if ($es_estudiante) {
        $descuento += $precio_base * $descuento_estudiante;
    }
    $respuesta['precio_base'] = $precio_base;
    $respuesta['descuento'] = $descuento;
    $respuesta['recargo'] = $recargo;
    $respuesta['total'] = $precio_base + $recargo - $descuento;

    return $respuesta;
}

/**
 * Esta función verifica si la cadena recibida por parámetro tiene dígitos o no.
 *
 * @param string $texto El texto a analizar
 *
 * @return boolean true si tiene dígitos, false si no los tiene.
 */
function tiene_numeros($texto) {
    for ($i = 0; $i < strlen($texto); $i++) {
        if (is_numeric($texto[$i])) {
            return true;
        }
    }
    return false;
}