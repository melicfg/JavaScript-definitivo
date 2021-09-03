function precioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 1 - descuento/100;
    const precioConDescuento = precio * porcentajePrecioConDescuento;
    return precioConDescuento;
}

function calcularPrecio() {
    const precio = parseInt(document.getElementById("precioArticulo").value);
    const descuento = parseInt(document.getElementById("descuentoArticulo").value);
    const nuevoPrecio = precioConDescuento(precio,descuento);

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio es " + nuevoPrecio + " colones.";
}
