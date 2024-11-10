// Función para mostrar el modal
function mostrarModal() {
    document.getElementById("modalBusqueda").style.display = "flex";
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modalBusqueda").style.display = "none";
}

// Función para realizar la búsqueda (aquí puedes agregar la lógica para hacer una búsqueda real)
function realizarBusqueda() {
    var busqueda = document.getElementById("busqueda").value;
    alert("Buscando: " + busqueda);
    cerrarModal(); // Cierra el modal después de la búsqueda
}