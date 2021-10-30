function mostrar() {
    document.getElementById("fieldset").style.display = "block";
}
function ocultar() {
    document.getElementById("fieldset").style.display = "none";
}
let cantidad, boton, total, cantidad_Descuento, precio, descuento, valor_unidad, limpiar;
boton = document.getElementById("boton1");
limpiar = document.getElementById("limpiar");
ocultar();
limpiar.addEventListener('click', () => {
    ocultar();
    document.getElementById("cantidad").value="";
})
boton.addEventListener('click', () => {
    cantidad = parseInt(document.getElementById("cantidad").value)
    precio = parseInt(document.getElementById("valor_compra").value = (`${850000 * cantidad}$`))
    valor_unidad = parseInt(document.getElementById("valor_unidad").value = (`${850000}$`))
    if ((precio > 0) && (precio < 1640000)) {
        mostrar();
        descuento = document.getElementById("descuento").value = (`0%`);
        cantidad_Descuento = document.getElementById("cantidad_Descuento").value = ("No hay")
        total = document.getElementById("total").value = (`${precio}$`)
    }
    else if ((precio >= 1640000) && (precio <= 3280000)) {
        mostrar();
        descuento = document.getElementById("descuento").value = (`15%`);
        cantidad_Descuento = parseInt(document.getElementById("cantidad_Descuento").value = (`${(precio / 100) * 15}$`))
        total = parseInt(document.getElementById("total").value = (`${precio - cantidad_Descuento}$`))
    }
    else if ((precio > 3280000) && (precio <= 6560000)) {
        mostrar();
        descuento = document.getElementById("descuento").value = (`25%`);
        cantidad_Descuento = parseInt(document.getElementById("cantidad_Descuento").value = (`${(precio / 100) * 25}$`))
        total = parseInt(document.getElementById("total").value = (`${precio - cantidad_Descuento}$`));
    }
    else if ((precio > 6560000) && (precio <= 9840000)) {
        mostrar();
        descuento = document.getElementById("descuento").value = (`35%`);
        cantidad_Descuento = parseInt(document.getElementById("cantidad_Descuento").value = (`${(precio / 100) * 35}$`))
        total = parseInt(document.getElementById("total").value = (`${precio - cantidad_Descuento}$`));
    }
    else if (precio > 9840000) {
        mostrar();
        descuento = document.getElementById("descuento").value = (`0%`);
        cantidad_Descuento = parseInt(document.getElementById("cantidad_Descuento").value = (`No tiene descuento`))
        total = parseInt(document.getElementById("total").value = (`${precio}$`));
    }
    else {
        alert("Ingresa un valor válido")
        ocultar()
    }
})