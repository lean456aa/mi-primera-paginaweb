// Función para abrir y cerrar el menú hamburguesa
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Función para mostrar imágenes según la opción seleccionada
function mostrarImagen(tipo) {
    let imagenContainer = document.getElementById('imagen-container');
    imagenContainer.innerHTML = '';

    if (tipo === 'centenario') {
        imagenContainer.innerHTML = `
            <img src="imagenes/centenario.jpg" alt="Centenario" 
                style="max-width: 400px; width: 100%; height: auto; border-radius: 10px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
                Información Sobre La Joya

Método de producción

Aretes elaborados por artesanos oaxaqueños donde el cobre es fundido en moldes dando formas de pavo reales, moños, monedas, flor, hamaca, margaritas, corbatas, etc.; у después se s
les da un baño de oro.

Tipo de metal:

Cobre bañado en oro

Anchura:

4.00 centimeters

Longitud:

6.50 centimeters

Tipo de cadena:

Caja

Cierre posterior:

Cierre de Gancho Cerrado
        `;
    } else if (tipo === 'anillos') {
        imagenContainer.innerHTML = `
            <img src="imagenes/anillos.jpg" alt="Anillo"
                style="max-width: 700px; width: 100%; height: auto; border-radius: 10px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
                Anillo,Dorado, con piedras negras


TAMAÑO: 5.8cm × 9.12 cm.
        `;
    } else if (tipo === 'aretes') {
        imagenContainer.innerHTML = `
            <img src="imagenes/aretes.jpg" alt="Aretes"
                style="max-width: 400px; width: 100%; height: auto; border-radius: 10px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
        `;
    } else if (tipo === 'pulseras') {
        imagenContainer.innerHTML = `
            <img src="imagenes/pulseras.jpg" alt="Pulseras"
                style="max-width: 400px; width: 100%; height: auto; border-radius: 10px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
        `;
    }
}


// Función para mostrar las secciones Acerca de y Comentarios
function mostrarSeccion(seccion) {
    const acercaDeContainer = document.getElementById('acerca-de-container');
    const comentariosContainer = document.getElementById('comentarios-container');

    // Ocultar ambas secciones
    acercaDeContainer.style.display = 'none';
    comentariosContainer.style.display = 'none';

    // Mostrar la sección seleccionada
    if (seccion === 'acerca') {
        acercaDeContainer.style.display = 'block';
    } else if (seccion === 'comentarios') {
        comentariosContainer.style.display = 'block';
    }
}
