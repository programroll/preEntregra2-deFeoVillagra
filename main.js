let usuario = ":)"
let contraseña = ":P"

let ingresarUruario = prompt("Ingrese su usuario")
let ingresarContraseña = prompt("Ingrese la contraseña")

if (usuario === ingresarUruario && contraseña === ingresarContraseña) {
    let mensajeInicial = "Bienvenido\n1* Ver lista de productos\n2* Ver el total\n0* para salir"
    let mensajeSecundario = "1* Articulo A $500\n2* Articulo B $200\n3* Articulo C $600"

    let opcion
    let total = 0
    do {
        opcion = pedirOpcion(mensajeInicial)
        switch (opcion) {
            case 1:
                let producto = pedirOpcion(mensajeSecundario)
                switch (producto) {
                    case 1:
                        total = total + 500

                        break;
                    case 2:
                        total = total + 200
                        break;
                    case 3:
                        total = total + 600
                        break;

                    default:
                        alert("Ingrese una opcion correcta")
                        break;
                }

                break;
            case 2:
                alert("El total a pagar es de $" + total + ".")
                break;

            case 0:
                alert("Gracias por visitarnos :)!")
                break;

            default:
                alert("Ingrese una opcion correcta")
                break;
        }
    } while (opcion !== 0 && opcion !== 3);

}
else {
    alert("Usuario incorrecto")
}

function pedirOpcion(mensaje) {
    return Number(prompt(mensaje))
}
