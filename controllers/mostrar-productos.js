
export const mostrarProducto = (nombre, precio, imagen, id, categoria, descripcion) => {

    const contenedor = document.createElement("div");

    contenedor.className = "producto__card";
    const contenido = `
    <div class="producto__card__imagen" style="background-Image: url(${imagen})"></div>
    <h3 class="producto__card__titulo">${nombre}</h3>
    <p class="producto__card__precio">$${precio}</p>
    <a class="producto__card__boton" href="../views/detalles-producto.html?id=${id}">Ver producto</a> 
    `;

    contenedor.innerHTML = contenido;
    return contenedor;
}