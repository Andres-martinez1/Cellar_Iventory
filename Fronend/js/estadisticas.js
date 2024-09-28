// Función para filtrar la tabla
function filtrarTabla() {
    // Obtener el valor de búsqueda
    var input = document.getElementById("searchInput");
    var filter = input.value.toLowerCase(); // Convertir a minúsculas
    var table = document.getElementById("dataTable"); // Obtener la tabla
    var tr = table.getElementsByTagName("tr"); // Obtener todas las filas de la tabla
  
    for (var i = 1; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td"); 
        var mostrar = false; 
  
        
        for (var j = 0; j < td.length - 1; j++) {
            if (td[j]) { 
                var textValue = td[j].textContent || td[j].innerText; 
                // Si el texto de la celda contiene el valor del filtro, mostrar la fila
                if (textValue.toLowerCase().indexOf(filter) > -1) {
                    mostrar = true;
                    break; // No es necesario seguir buscando en la misma fila, ya que debe mostrarse
                }
            }
        }
  
        // Mostrar u ocultar la fila dependiendo de si cumple con el criterio de búsqueda
        if (mostrar) {
            tr[i].style.display = ""; // Mostrar la fila
        } else {
            tr[i].style.display = "none"; // Ocultar la fila
        }
    }
  }
  
  // Asignar el evento 'keyup' al input de búsqueda para que se filtre la tabla cada vez que el usuario escriba
  document.getElementById("searchInput").addEventListener("keyup", filtrarTabla);
  
  