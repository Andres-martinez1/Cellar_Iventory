    // Función para filtrar la tabla
    function filtrarTabla() {
        // Obtener los valores de los filtros
        var filterProducto = document.getElementById("filterProducto").value.toLowerCase();
        var filterBodega = document.getElementById("filterBodega").value.toLowerCase();

        // Obtener la tabla y todas las filas del cuerpo
        var table = document.getElementById("inventoryTable");
        var tr = table.getElementsByTagName("tr");

        // Recorrer todas las filas de la tabla
        for (var i = 1; i < tr.length; i++) { // Empezamos en 1 para saltar la fila del encabezado
          var tdProducto = tr[i].getElementsByTagName("td")[0];
          var tdBodega = tr[i].getElementsByTagName("td")[1];

          if (tdProducto && tdBodega) {
            var productoText = tdProducto.textContent || tdProducto.innerText;
            var bodegaText = tdBodega.textContent || tdBodega.innerText;

            // Comprobar si los valores de los filtros coinciden con los datos de la fila
            if (
              (productoText.toLowerCase().indexOf(filterProducto) > -1 || filterProducto === "") &&
              (bodegaText.toLowerCase().indexOf(filterBodega) > -1 || filterBodega === "")
            ) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }

      // Añadir eventos de cambio a los campos de búsqueda
      document.getElementById("filterProducto").addEventListener("keyup", filtrarTabla);
      document.getElementById("filterBodega").addEventListener("keyup", filtrarTabla);
