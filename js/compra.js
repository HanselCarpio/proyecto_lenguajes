const compra = new Elementos();
const listaCompras = document.querySelector('#lista-compra tbody');

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    compra.calcularTotal();
}