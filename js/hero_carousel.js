/* =================================
   Archivo: js/hero_carousel.js 
   ================================= */

const initHeroCarousel = () => {
    const carousel = document.getElementById('hero-carousel');
    // Prevenir error si el carrusel no está en la página
    if (!carousel) {
        console.warn('Elemento #hero-carousel no encontrado.');
        return;
    }

    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.indicator-dot');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    
    const totalSlides = items.length;
    let currentIndex = 0;
    
    if (totalSlides === 0) {
        console.warn('No se encontraron diapositivas para el carrusel.');
        return;
    }

    const updateCarousel = () => {
        const offset = -currentIndex * 100;
        inner.style.transform = `translateX(${offset}%)`;

        indicators.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
    };

    const goToPrev = () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    };

    const goToNext = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    };

    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);

    indicators.forEach(dot => {
        dot.addEventListener('click', (e) => {
            // dataset.slideTo devuelve string, convertir a número
            const slideTo = parseInt(e.target.dataset.slideTo, 10);
            if (!isNaN(slideTo)) {
                currentIndex = slideTo;
                updateCarousel();
            }
        });
    });
    
    let autoSlideInterval = setInterval(goToNext, 6000);

    carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carousel.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(goToNext, 6000);
    });

    // Inicializar estado
    updateCarousel();
};
