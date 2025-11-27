/* =======================================
   Archivo: js/detalle-producto.js
   ======================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Sistema de Pestañas (Tabs)
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // 1. Quitar clase active de todos los botones
                tabs.forEach(t => t.classList.remove('active'));

                // 2. Agregar clase active al botón clickeado
                tab.classList.add('active');

                // 3. Ocultar todos los paneles
                panes.forEach(pane => pane.classList.remove('active'));

                // 4. Mostrar el panel correspondiente (usando data-tab)
                const targetId = tab.dataset.tab;
                const targetPane = document.getElementById(targetId);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }

    // Funcionalidad simple de galería de imágenes (Visual)
    const mainImg = document.getElementById('main-product-img');
    const thumbnails = document.querySelectorAll('.gallery-thumbnails img');

    if (mainImg && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Actualizar imagen principal
                mainImg.src = thumb.src;

                // Actualizar estilo activo
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });
    }

});