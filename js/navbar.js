/* =================================
   Archivo: js/navbar.js 
   ================================= */
const initNavbar = () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavPanel = document.querySelector('.mobile-nav-panel');
    const closeBtn = document.querySelector('.close-btn');
    const navOverlay = document.querySelector('.nav-overlay');

    // Si algún elemento no existe, no continuamos para evitar errores.
    if (!menuToggle || !mobileNavPanel || !closeBtn || !navOverlay) {
        console.warn('Elementos de la navbar móvil no encontrados.');
        return;
    }

    const openMenu = () => {
        mobileNavPanel.classList.add('open');
        navOverlay.classList.add('visible');
    };

    const closeMenu = () => {
        mobileNavPanel.classList.remove('open');
        navOverlay.classList.remove('visible');
    };

    menuToggle.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    navOverlay.addEventListener('click', closeMenu);
};
