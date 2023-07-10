import { clientServices } from '../services/client-services.js';
import { mostrarProducto } from '../controllers/mostrar-productos.js';

const starWars = document.querySelector('[data-star-wars]');
const consolas = document.querySelector('[data-consolas]');
const diversos = document.querySelector('[data-diversos]');


clientServices.listaProductos().then(data => {
    data.forEach(({ nombre, precio, imagen, id, categoria, descripcion }) => {
        //mostrar en el index
        if (categoria === 'Star wars') {
            const nuevoProducto = mostrarProducto(nombre, precio, imagen, id, categoria, descripcion);
            starWars.appendChild(nuevoProducto);
        } else if (categoria === 'Consolas') {
            const nuevoProducto = mostrarProducto(nombre, precio, imagen, id, categoria, descripcion);
            consolas.appendChild(nuevoProducto);
        } else if (categoria === 'Diversos') {
            const nuevoProducto = mostrarProducto(nombre, precio, imagen, id, categoria, descripcion);
            diversos.appendChild(nuevoProducto);
        }
    })
})