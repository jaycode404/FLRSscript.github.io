//consultar productos
const listaProductos = () => fetch('https://e-commerce-db-7192.onrender.com/productos').then(respuesta => respuesta.json());


//detalle producto
const detalleProducto = async (id) => {
    return fetch(`https://e-commerce-db-7192.onrender.com/productos/${id}`)
        .then(respuesta => respuesta.json())
}


//crear productos
const crearProducto = (nombre, precio, imagen, categoria, descripcion) => {
    return fetch(`https://e-commerce-db-7192.onrender.com/productos`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, imagen, categoria, descripcion })
    }).then(respuesta => {
        if (respuesta.ok) {
            return respuesta.body
        }
    })
    throw new Error('no se pudo crear el producto')
};

//editar productos
// const actualizarProducto = (nombre, precio, imagen, id, categoria, descripcion) => {
//     return fetch(`http://localhost:3000/productos/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(({ nombre, precio, id, imagen, categoria, descripcion }))
//             .then(respuesta => respuesta).catch(error => console.log(error))
//     });
// };

//editar productos corregido
const actualizarProducto = (nombre, precio, imagen, id, categoria, descripcion) => {
    return fetch(`https://e-commerce-db-7192.onrender.com/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            precio,
            id,
            imagen,
            categoria,
            descripcion
        })
    })
        .then(respuesta => respuesta)
        .catch(error => console.log(error));
};



//eliminar productos
const eliminarProducto = (id) => {
    return fetch(`https://e-commerce-db-7192.onrender.com/productos/${id}`, {
        method: "DELETE"
    })
}

export const clientServices = {
    listaProductos,
    detalleProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};
