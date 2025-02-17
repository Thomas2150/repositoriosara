

    // Detectar cuando la sección "Quiénes Somos" entra en el viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Agrega la clase cuando es visible
            } else {
                entry.target.classList.remove('visible'); // La quita cuando deja de ser visible
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% de la sección es visible
    });

    // Seleccionar la sección "Quiénes Somos"
    const seccion = document.querySelector('.seccion.quienes-somos');
    observer.observe(seccion);




