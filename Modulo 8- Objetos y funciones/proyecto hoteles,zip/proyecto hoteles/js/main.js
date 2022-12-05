document.getElementById("tema").innerHTML = "Hoteles"; //TEMA es para el titulo Principal,const de objetos

iniciaHoteles();
let posicionActual = 0;
mostrarHotel();
console.table(hoteles);


function mostrarHotel() {
    buscar()
    let nombre = hoteles[posicionActual].getnombre();
    //console.log(nombre);
    let descripcion = hoteles[posicionActual].toString() + "<br>" + hoteles[posicionActual].calcularMantenimiento();

    document.getElementById("nombreHotel").innerHTML = nombre;
    document.getElementById("descripcion").innerHTML = descripcion;
}


function encontrarHotel() { //ESTE ES EL BOTON que busca en el html!!1
    let varNombre = prompt("Indica el nombre del hotel que quieres buscar:", "");
    let indice = buscar(varNombre);

    //let indice = imagenes.findIndex(imagen => imagen.nombre == varNombre);

    if (indice >= 0) {
        posicionActual = indice;
        mostrarHotel();
    } else {
        alert("El hotel ( " + varNombre + " ) no se encuentra.");
    }
}


function buscar(nombreHotel) {
    let encontrado = false;
    let elementos = hoteles.length;
    let i = 0;
    let indice = -1;

    while (i < elementos && !encontrado) {
        if (hoteles[i].nombre == nombreHotel) {
            indice = i;
            encontrado = true;
        }
        i++;
    }

    return indice;
}





//hago botones de avanzar y retroceder en html + src
function avanzar() {

    //if no puede ser mas grande que array
    if (posicionActual < (hoteles.length - 1)) {
        posicionActual++;
    } else {
        posicionActual = 0;

    }
    mostrarHotel();
}


function retroceder() {

    //if nno puede ser mas pequeño que array
    if (posicionActual < (hoteles.length)) {
        posicionActual--;
    }

    mostrarHotel();
}