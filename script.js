const imgElement = document.getElementById('lab-image');
const clickableImage = document.getElementById('clickable-image');

// Escuchar los clics en la imagen principal
imgElement.addEventListener('click', function(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    // Área clickeable en torno a las coordenadas
    if (x > 643 && x < 663 && y > 385 && y < 405) {
        // Mostrar la nueva imagen
        clickableImage.style.display = 'block';
    }
});

// Escuchar clic en la nueva imagen para volver a la imagen principal
clickableImage.addEventListener('click', function() {
    // Ocultar la nueva imagen al hacer clic en ella
    clickableImage.style.display = 'none';
});

