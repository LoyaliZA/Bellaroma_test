/* =================================
   Archivo: js/theme-switcher.js 
   ================================= */
const initThemeSwitcher = () => {
    const switcher = document.getElementById('theme-switcher');
    
    if (!switcher) {
        console.warn('Botón para cambiar de tema no encontrado.');
        return;
    }

    // Función para aplicar el tema guardado en localStorage o el preferido por el sistema
    const applyStoredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Prioridad: 1. LocalStorage, 2. Preferencia del sistema
        const defaultTheme = storedTheme ? storedTheme : (systemPrefersDark ? 'dark' : 'light');
        
        document.documentElement.setAttribute('data-theme', defaultTheme);
        switcher.textContent = defaultTheme === 'dark' ? 'dark_mode' : 'light_mode';
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
