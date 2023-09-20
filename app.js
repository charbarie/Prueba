
function validarFormulario(e) {
    e.preventDefault();
    
    const importe = Number(document.getElementById("importe").value);
    const cuotas = Number(document.getElementById("cuotas").value);
    const vencimiento = Number(document.getElementById("vencimiento").value);
    if (isNaN(importe) || isNaN(cuotas) || isNaN(vencimiento)) {
        Swal.fire({
            title: `Ingrese valores para calcular`,
            confirmButtonText: "Salir"
        });
    }else{
    const data = {
        verCuota: verCuota,
        importe: importe,
        cuotas: cuotas,
        vencimiento: vencimiento
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem("prestamoData", jsonData);
    (vencimiento === 30) ? vercuota(importe,interes,cuotas) : (vercuota(importe,interes,cuotas) * 2);
    Swal.fire({
        title: `El valor de la cuota es ${verCuota}`,
        confirmButtonText: "Salir"
    });
}
}



function vercuota (a, b, c){
    const montodecuota = (a + c) / b;
        return montodecuota;
}