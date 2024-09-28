// Obtener la tabla de usuarios y el campo de búsqueda
const tablaUsuarios = document.getElementById('tablaUsuarios');
const buscarUsuarios = document.getElementById('buscarUsuarios');


buscarUsuarios.addEventListener('input', () => {
    const filtro = buscarUsuarios.value.toLowerCase(); // Convertir el valor del campo de búsqueda a minúsculas
    const filas = tablaUsuarios.rows; // Obtener todas las filas de la tabla

    // Recorrer las filas de la tabla, comenzando desde la segunda (índice 1) porque la primera es el encabezado
    for (let i = 1; i < filas.length; i++) {
        const fila = filas[i]; // Obtener la fila actual
        const celdas = fila.cells; // Obtener todas las celdas de la fila

        // Obtener el contenido de las celdas de nombre y apellido, convirtiéndolo a minúsculas
        const nombre = celdas[0].textContent.toLowerCase(); 
        const apellido = celdas[1].textContent.toLowerCase();
      
        // Comprobar si el filtro coincide con el nombre o el apellido
        if (nombre.includes(filtro) || apellido.includes(filtro)) {
            fila.style.display = ''; // Mostrar la fila si coincide
        } else {
            fila.style.display = 'none'; // Ocultar la fila si no coincide
        }
    }
});
