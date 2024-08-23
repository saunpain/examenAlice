document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    let counter = 0;
    const size = images[0].clientWidth;

    // Inicialmente, deshabilitar el botón "anterior" porque estamos en la primera imagen
    prevBtn.disabled = true;

    // Función para actualizar los botones
    function updateButtons() {
        if (counter === 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (counter === images.length - 1) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    // Evento para botón "siguiente"
    nextBtn.addEventListener('click', () => {
        if (counter >= images.length - 1) return; // Evitar desbordamiento
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        updateButtons();
    });

    // Evento para botón "anterior"
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return; // Evitar desbordamiento
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        updateButtons();
    });
});
