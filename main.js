let usuario = ":)"
let contraseña = ":P"

let ingresarUruario = prompt("Ingrese su usuario")
let ingresarContraseña = prompt("Ingrese la contraseña")

let productos = [
    {
        id: 1,
        categoria: "indumentaria",
        nombre: "remera",
        precio: 3000,
        stock: 2
    },
    {
        id: 2,
        categoria: "indumentaria",
        nombre: "vestido",
        precio: 4000,
        stock: 3
    },
    {
        id: 3,
        categoria: "accesorios",
        nombre: "collar-hilo",
        precio: 1500,
        stock: 3
    },
    {
        id: 4,
        categoria: "accesorios",
        nombre: "monedero",
        precio: 2000,
        stock: 2
    },
    {
        id: 5,
        categoria: "calzado",
        nombre: "bota",
        precio: 8000,
        stock: 3
    },
]

if (usuario === ingresarUruario && contraseña === ingresarContraseña) {

    let mensajeInicial = "Bienvenido\nElija una opción:\n1* Ver lista de productos\n2* Elegir una categoría\n3*Agregar al carrito\n4*Mi carrito\n0* para salir"

    let total = 0
    let opcion
    let carrito = []

    do {
        opcion = Number(prompt(mensajeInicial))

        switch (opcion) {
            case 1:
                alert("Nuestros productos son: \n" + lista(productos))
                
                break

            case 2:
                let categoria = prompt("Nuetras categorias son: \n Indumentaria\n Accesorios\n Calzado\n Ingrese una categoria").toLowerCase()

                let productosFiltrados = productos.filter(
                    (producto) => producto.categoria === categoria
                )

                if (productosFiltrados.length === 0) {
                    alert("No tenemos esa categoría");
                } else {
                    alert(
                        "Lista de productos por categoria: " +
                        categoria + "\n" + lista(productosFiltrados)
                    );
                    break
                }
            case 3:
                let seleccion = prompt(
                    "Seleccione qué producto quiere por el nombre\n" + lista(productos)
                    )
                let productoSeleccionado = productos.find (producto => producto.nombre === seleccion)

                if (productoSeleccionado) {
                    carrito.push(productoSeleccionado)
                    alert (`Se agregó  "${seleccion}" al carrito` )
                } else {
                    alert ("No tenemos un artículo con ese nombre")
                }

                break

            case 4:
                alert("Los productos seleccionados son: \n" + lista(carrito))
                
                break

            case 0:
                alert("Gracias por visitarnos :)!")
                break

            default:
                alert("Ingrese una opcion correcta")
                break
        }
    } while (opcion !== 0)

}
else {
    alert("Usuario incorrecto")
}

function lista(productos) {
    return productos.map(producto =>{
        return`Nombre: ${producto.nombre}   $ ${producto.precio} `
    }).join("\n")
}
