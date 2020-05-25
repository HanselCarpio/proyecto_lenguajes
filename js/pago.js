const pago = new Elementos();

const elementos = document.querySelector('#imagenes');

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', pago.cambiarDetalles("16"));
}


/*const compra = new Elementos();
const listaAlojamientos = document.querySelector('#lista-compra tbody');

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    compra.calcularTotal();
}*/