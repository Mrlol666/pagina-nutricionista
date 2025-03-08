document.addEventListener("DOMContentLoaded", function () {
    // Configurar Mercado Pago
    const mp = new MercadoPago("TU_PUBLIC_KEY", {
        locale: "es-AR"
    });

    mp.checkout({
        preference: {
            id: "TU_PREFERENCE_ID"
        },
        render: {
            container: "#boton-mercado-pago", // Donde se mostrará el botón de pago
            label: "Pagar con Mercado Pago", // Texto del botón
        }
    });

    // Manejar la reserva de turnos
    document.getElementById("form-turno").addEventListener("submit", function (event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;
        
        if (nombre && fecha && hora) {
            alert(`Turno reservado para ${nombre} el ${fecha} a las ${hora}`);
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});



