const btn_generar = document.getElementById('btn_generar');
const txt_resultado = document.getElementById('txt_resultado');

btn_generar.addEventListener('click', function(event) {

    // Limpiar resultado anterior
    let tabla = "";

    // Capturar el valor de la caja de texto
    let txt_numero_tabla = document.getElementById('txt_numero_tabla').value;

    // Validar que sea un número
    if (txt_numero_tabla === "" || isNaN(txt_numero_tabla)) {
        txt_resultado.className = "alert alert-danger";
        txt_resultado.innerHTML = "Por favor, ingrese un número válido.";
        return;
    }

    // Convertir a número
    let numero = parseInt(txt_numero_tabla);

    // Ciclo do...while
    let i = 1;
    do {
        tabla += `<div>${numero} x ${i} = ${numero * i}</div>`;
        i++;
    } while (i <= 12);

    txt_resultado.innerHTML = tabla;
})