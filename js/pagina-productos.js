document.addEventListener('DOMContentLoaded', () => {
    const mobileFilterBtn = document.getElementById('mobile-filter-btn');
    const offcanvasFilterPanel = document.getElementById('offcanvas-filter-panel');
    const closeFilterBtn = offcanvasFilterPanel.querySelector('.close-btn');
    const filterOverlay = document.getElementById('filter-overlay');

    const toggleFilterPanel = () => {
        offcanvasFilterPanel.classList.toggle('open');
        filterOverlay.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    };

    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener('click', toggleFilterPanel);
    }
    if (closeFilterBtn) {
        closeFilterBtn.addEventListener('click', toggleFilterPanel);
    }
    if (filterOverlay) {
        filterOverlay.addEventListener('click', toggleFilterPanel);
    }

    const offcanvasDetails = offcanvasFilterPanel.querySelectorAll('details');
    if (window.innerWidth <= 992) {
        offcanvasDetails.forEach(detail => {
            detail.removeAttribute('open');
        });
    }

    const applyFiltersBtn = document.getElementById('apply-filters-btn');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');

    if(applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            alert('Filtros aplicados (simulado)');
            toggleFilterPanel();
        });
    }

    if(clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            alert('Filtros Limpiados');
            toggleFilterPanel();
        });
    }
});