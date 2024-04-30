function colorChange() {
    if (document.getElementById("navbar").className == "navbar bg-primary mb-5")
        document.getElementById("navbar").className = "navbar bg-danger mb-5", document.getElementById("subBut").className = "btn btn-danger btn-lg", document.getElementById("foot").className = "footer mt-auto py-3 bg-danger text-white d-flex align-items-center justify-content-center", document.getElementById("tablaDesc").className = "table table-bordered table-hover border-danger", document.getElementById("botonContratar").className = "btn btn-danger btn-lg";
    else
        document.getElementById("navbar").className = "navbar bg-primary mb-5", document.getElementById("subBut").className = "btn btn-primary btn-lg", document.getElementById("foot").className = "footer mt-auto py-3 bg-primary text-white d-flex align-items-center justify-content-center", document.getElementById("tablaDesc").className = "table table-bordered table-hover border-primary", document.getElementById("botonContratar").className = "btn btn-primary btn-lg";
};

function cuotaNotZero() {
    if (document.getElementById("cuotas").value <= 0) {
        alert("la cantidad de cuotas no puede ser 0 o menor a 0");
    }
};