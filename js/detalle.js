const ele = new Elementos();
const alojamiento = document.getElementById('campo1');

const procesarDetallesBtn = document.getElementById('verDetalles');

cargarEventos();

function cargarEventos(){
    console.log('1');
alojamiento.addEventListener('click', (e)=>{ele.elegirAlojamiento(e)});
}



window.onload = function(){
    cargarEventos();
  }

function cargarEventos(){
    procesarDetallesBtn.addEventListener('click', (e)=>{ele.procesarPedido(e)});
}

/*const carro = new Elemento();
const carrito = document.getElementById("carrito");
const producto = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn =  document.getElementById('vaciar-carrito');

const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos(){
    producto.addEventListener('click', (e)=>{carro.comprarProducto(e)});

    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}*/