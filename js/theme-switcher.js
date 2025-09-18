/* =================================
   Archivo: js/theme-switcher.js 
   ================================= */
const initThemeSwitcher = () => {
    const switcher = document.getElementById('theme-switcher');
    
    if (!switcher) {
        console.warn('Botón para cambiar de tema no encontrado.');
        return;
    }

    // Función para aplicar el tema guardado en localStorage
    const applyStoredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            document.documentElement.setAttribute('data-theme', storedTheme);
            switcher.textContent = storedTheme === 'dark' ? 'dark_mode' : 'light_mode';
        }
    };

    switcher.addEventListener('click', () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        root.setAttribute('data-theme', newTheme);
        switcher.textContent = newTheme === 'dark' ? 'dark_mode' : 'light_mode';
        
        // Guardar la preferencia del usuario
        localStorage.setItem('theme', newTheme);
    });

    // Aplicar el tema al cargar la página
    applyStoredTheme();
};
