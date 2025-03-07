document.addEventListener("DOMContentLoaded", function () {
    // Manejar la reserva de turnos
    document.getElementById("form-turno").addEventListener("submit", function (event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const fecha = document.getElementById("fecha").value;
        const
