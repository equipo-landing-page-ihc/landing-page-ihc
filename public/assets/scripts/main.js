document.addEventListener('DOMContentLoaded', function() {
    const connectBtn = document.getElementById('connect-btn');

    connectBtn.addEventListener('click', function() {
        // Simula una alerta o modal (en un avance real, redirigiría a la app)
        alert('¡Bienvenido a Finder! Pronto podrás descargar la app para iOS y Android. \n\nEnfocada en seguridad y conexiones auténticas para personas reales.');

        connectBtn.style.background = '#FFD700';
        connectBtn.style.color = '#333';
        setTimeout(() => {
            connectBtn.style.background = '#4A90E2';
            connectBtn.style.color = 'white';
        }, 500);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});