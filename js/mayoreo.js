/* js/mayoreo.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE PRECIOS (BARRA FLOTANTE) ---
    // (Mantén tu código anterior de la barra flotante aquí, ese no cambia)
    const wholesaleBar = document.getElementById('wholesale-bar');
    const totalUnitsElem = document.getElementById('total-units');
    const totalPriceElem = document.getElementById('total-price');
    
    const calculateTotals = () => {
        let totalUnits = 0;
        let totalPrice = 0;
        const inputs = document.querySelectorAll('.qty-control input, .qty-bulk');

        inputs.forEach(input => {
            const val = parseInt(input.value) || 0;
            if (val > 0) {
                let price = 0;
                if (input.dataset.price) {
                    price = parseFloat(input.dataset.price);
                } else {
                    const card = input.closest('.wholesale-controls');
                    const standardInput = card.querySelector('.qty-standard');
                    price = parseFloat(standardInput.dataset.price);
                }
                totalUnits += val;
                totalPrice += (val * price);
            }
        });

        totalUnitsElem.textContent = totalUnits;
        totalPriceElem.textContent = new Intl.NumberFormat('es-MX', { 
            style: 'currency', currency: 'MXN' 
        }).format(totalPrice);

        if (totalUnits > 0) wholesaleBar.classList.add('active');
        else wholesaleBar.classList.remove('active');
    };

    const allInputs = document.querySelectorAll('input[type="number"]');
    allInputs.forEach(input => {
        input.addEventListener('input', calculateTotals);
    });

    // --- NUEVA LÓGICA DE VALIDACIÓN DE STOCK ---

    // 1. Checkboxes "Más de 10"
    const checkboxes = document.querySelectorAll('.bulk-check');
    checkboxes.forEach(chk => {
        chk.addEventListener('change', (e) => {
            const card = e.target.closest('.wholesale-controls');
            const extraPanel = card.querySelector('.bulk-extra-panel');
            const standardInput = card.querySelector('.qty-standard');
            
            // Si el checkbox está deshabilitado (por falta de stock), no hacemos nada
            if (e.target.disabled) return;

            if (e.target.checked) {
                extraPanel.classList.add('active');
                // Al activar mayoreo, llenamos el input normal al máximo permitido (usualmente 10)
                standardInput.value = standardInput.getAttribute('max');
                calculateTotals(); 
            } else {
                extraPanel.classList.remove('active');
                const bulkInput = extraPanel.querySelector('.qty-bulk');
                if(bulkInput) bulkInput.value = '';
                calculateTotals();
            }
        });
    });

    // 2. Validación dinámica del MAX attribute
    const standardInputs = document.querySelectorAll('.qty-standard');
    standardInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            // Leemos el atributo "max" específico de ESTE input (ej: 3, 5, 10)
            const maxLimit = parseInt(e.target.getAttribute('max')) || 10;
            const currentVal = parseInt(e.target.value);

            if (currentVal > maxLimit) {
                e.target.value = maxLimit;
                // Feedback visual sutil (opcional)
                alert(`Solo contamos con ${maxLimit} piezas disponibles de este producto.`);
            }
        });
    });
});