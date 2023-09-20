let importe, cuotas, vencimiento;

document.getElementById("formu").addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    
    importe = Number(document.getElementById("importe").value);
    cuotas = Number(document.getElementById("cuotas").value);
    vencimiento = Number(document.getElementById("vencimiento").value);
    
    if (isNaN(importe) || isNaN(cuotas) || isNaN(vencimiento)) {
        mostrarMensaje("Ingrese valores válidos para calcular");
    } else {
        
        const verCuota = calcularVerCuota(importe, cuotas, vencimiento);
        console.log("fuera de la funcion es " + verCuota)
        guardarEnLocalStorage(verCuota);
        
        mostrarMensaje(`El valor de la cuota es ${verCuota}`);
    }
}

function calcularVerCuota(a, b, c) {
    console.log("dentro de la funcion es a " + a + "b " +" " + b + " c " + c)
    const valor =(c === 30) ? (a + obtenerInteres()) / b : (a + obtenerInteres()) / b * 2;
    console.log("dentro de la funcion es " + valor);
    return valor;

}

function obtenerInteres() {
    return fetch('./datosInteres.json')
        .then(response => response.json())
        .then(data => data.interes)
        .catch(error => {
            console.error("Error al obtener datos del servidor:", error);
            return 0;
        });
}

function guardarEnLocalStorage(verCuota) {
    const data = {
        verCuota: verCuota,
        importe: importe,
        cuotas: cuotas,
        vencimiento: vencimiento
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem("prestamoData", jsonData);
}

function mostrarMensaje(mensaje) {
    Swal.fire({
        title: mensaje,
        confirmButtonText: "Salir"
    });
}
