const cajaGgrid = document.querySelector('#caja-grid');
const botonRojo = document.querySelector('#botonRojo');
const botonNegro = document.querySelector('#botonNegro');
const selectPuertas = document.querySelector('#filtroPuertas');
let datosCoches = []; // Variable para almacenar los datos de los coches

async function cargarDatos() {
    
        const respuesta = await fetch('datos.json');
        datosCoches = await respuesta.json();
        mostrarCoches(datosCoches);
    
}

function mostrarCoches(coches) {
    cajaGgrid.innerHTML = '';
    coches.forEach(coche => {
        cajaGgrid.innerHTML += `
            <div>
                <p>modelo: ${coche.marca}</p>
                <p>numero de puertas: ${coche.puertas}</p>
                <p>color: ${coche.color}</p>
                <p>precio: ${coche.precio}</p>
            </div>
        `;
    });
}

function filtrarPorColor(color) {
    const cochesFiltrados = datosCoches.filter(coche => coche.color === color);
    mostrarCoches(cochesFiltrados);
}

function filtrarPorPuertas(numeroPuertas) {
    const cochesFiltrados = datosCoches.filter(coche => {
        if (numeroPuertas === 'todos') {
            return true; // Mostrar todos los coches
        } else {
            return coche.puertas.toString() === numeroPuertas; // Filtrar por número de puertas seleccionado
        }
    });
    mostrarCoches(cochesFiltrados);
}

function init() {
    cargarDatos();

    botonRojo.addEventListener("click", function() {
        filtrarPorColor('rojo');
    });

    botonNegro.addEventListener("click", function() {
        filtrarPorColor('negro');
    });

    selectPuertas.addEventListener("change", function() {
        const valorSeleccionado = selectPuertas.value;
        filtrarPorPuertas(valorSeleccionado);
    });
}

init();
