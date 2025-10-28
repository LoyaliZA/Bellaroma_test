/* =================================
   Archivo: js/main.js (CORREGIDO)
   ================================= */

// Este es el punto de entrada principal para todo el JavaScript.
// Se asegura de que el DOM esté completamente cargado antes de ejecutar los scripts.
document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializar todos los módulos de JS
    console.log("DOM cargado. Inicializando scripts...");
    
    initNavbar();
    initThemeSwitcher();
    initHeroCarousel(); // <-- ESTA LÍNEA FUE AÑADIDA
    
    console.log("Scripts inicializados.");

});
