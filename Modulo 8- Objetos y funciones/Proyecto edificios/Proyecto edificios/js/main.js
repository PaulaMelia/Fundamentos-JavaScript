document.getElementById("tema").innerHTML = "EDIFICIOS"; //TEMA es para el titulo Principal,const de objetos


let posicionActual = 0;
listaHoteles();
listaHospitales();
listaCines();
//console.table();


function mostrarHotel() {

    let descripcion = hoteles[posicionActual].toString() + "<br>" + hoteles[posicionActual].vigilancia();
    document.getElementById("mostrar").innerHTML = descripcion;


}

function mostrarHospital() {
    let descripcion = hospitales[posicionActual].toString();
    document.getElementById("mostrar").innerHTML = descripcion;

}

function mostrarCine() {
    let descripcion = cines[posicionActual].toString();
    document.getElementById("mostrar").innerHTML = descripcion;
}
//final mostrar
/////////////////////////////////////////////////////////////////////////////////////////////////////
function busquedaEdificio() { //ESTE ES EL BOTON que busca en el html!!1, BUSCA EL TIPO DE EDIFICIO
    let tipo = prompt("Indica que tipo de edificio quieres buscar:", "Hotel,Cine,Hospital...");
    let indice = buscar(tipo);


    if (indice >= 0) {
        posicionActual = indice;
        if (tipo == "Hospital") {
            document.getElementById("mostrar").innerHTML = hospitales[posicionActual].toString() + "<br>" + hospitales[posicionActual].vigilancia();;
        } else if (tipo == "Hotel") {
            document.getElementById("mostrar").innerHTML = hoteles[posicionActual].toString() + "<br>" + hoteles[posicionActual].vigilancia();
            //console.log( hoteles[posicionActual]);
        } else {
            document.getElementById("mostrar").innerHTML = cines[posicionActual].toString() + "<br>" + cines[posicionActual].vigilancia();;
        }
    } else {
        alert("No se ha encontrado ningun edificio de este tipo")
    }

} //final busqueda edificio

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function buscar(tipo) { // esta funcion no tiene boton es para que vayan las otras funciones,ITEM
    if (tipo == "Hotel") {
        let nombre = prompt("Indica el nombre del hotel: ");
        console.log(hoteles);
        let encontrado = false;
        let elementos = hoteles.length;
        let i = 0;
        let indice = -1;

        while (i < elementos && !encontrado) {
            if (hoteles[i].getnombre() == nombre) {
                indice = i;
                encontrado = true;
            }
            i++;
        }
        return indice;
    } else if (tipo == "Hospital") {
        let nombre = prompt("Indica el nombre del hospital: ");
        let encontrado = false;
        let elementos = hospitales.length;
        let i = 0;
        let indice = -1;

        while (i < elementos && !encontrado) {
            if (hospitales[i].getnombre() == nombre) {
                indice = i;
                encontrado = true;
            }
            i++;
        }
        console.log(indice);
        return indice;



    } else {
        let nombre = prompt("Indica el nombre del cine: ");
        let encontrado = false;
        let elementos = cines.length;
        let i = 0;
        let indice = -1;

        while (i < elementos && !encontrado) {
            if (cines[i].getnombre() == nombre) {
                indice = i;
                encontrado = true;
            }
            i++;
        }
        return indice;

    }
} //Final funcion buscar-tipo



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function proyectarSesion() {

    let asistentes = parseInt(prompt("Cuantos asistentes son para la sesion?"));
    let respuesta;
    if (asistentes <= this.aforo) {
        let precioEntrada = parseInt(prompt("Indica precio entrada"));
        let costSesion = asistentes * precioEntrada;
        respuesta = "Se ha recaudado " + costSesion + " €";

    } else {
        proyeccion = "Se ha superado el aforo, lo sentimos";
    }
    return proyeccion;
} //Final proyectar

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function crearEdificio() {
    let nuevoEdificio = prompt("Indica el tipo de edificio que quieres crear: ", "Hotel,Hospital,Cine...");
    let indice = buscar(nuevoEdificio);
    nuevoEdificio = nuevoEdificio.toLowerCase();

    if (indice == "Hotel") {
        let nombre, nPlantas, superficie, tipo, nHabitaciones;
        nombre = prompt("Como se llama el nuevo hotel: ")
        nPlantas = prompt("Cuantas plantas tiene el hotel?", "plantas");
        superficie = prompt("Cuantos m2 de superficie tiene el hotel?", "m2");
        tipo = prompt("Que tipo de edificio es: ");
        nHabitaciones = prompt("Que numero de habitaciones tiene: ");

        hotel = new Hotel(nombre, nPlantas, superficie, tipo, nHabitaciones);
        hoteles.push(hotel);
        posicionActual = hoteles.length - 1;
        mostrarHotel();

    } else if (indice == "Hospital") {

        let nombre, nPlantas, superficie, tipo, enfermos;
        nombre = prompt("Como se llama el nuevo hotel: ")
        nPlantas = prompt("Cuantas plantas tiene el hotel?", "plantas");
        superficie = prompt("Cuantos m2 de superficie tiene el hotel?", "m2");
        tipo = prompt("Que tipo de edificio es: ");
        enfermos = prompt("Cuantos enfermos tiene: ");

        hospital = new Hospital(nombre, nPlantas, superficie, tipo, enfermos);
        hospitales.push(hospital);
        posicionActual = hospitales.length - 1;
        mostrarHospital();


    } else {

        let nombre, nPlantas, superficie, tipo, aforo;
        nombre = prompt("Como se llama el nuevo hotel: ")
        nPlantas = prompt("Cuantas plantas tiene el hotel?", "plantas");
        superficie = prompt("Cuantos m2 de superficie tiene el hotel?", "m2");
        tipo = prompt("Que tipo de edificio es: ");
        aforo = prompt("Cuanto aforo tiene: ");

        cine = new Cine(nombre, nPlantas, superficie, tipo, aforo);
        cines.push(cine);
        posicionActual = cines.length - 1;
        mostrarCine();

    }
} // final funcion crear


function eliminarHotel() {
    
    let elimHotel = hoteles[posicionActual].nombre;
    let respuesta = confirm("Estas seguro que quieres eliminar este hotel?: (" + elimHotel + ").");
    if (respuesta == true) {
        hoteles.splice(hoteles[posicionActual], 1);
        posicionActual = 0;
        mostrarHotel();

    } else {
        alert("Sin problema");
    }
} //final eliminar edificio


function eliminarHospital() {
    let eliminarHospital = hospitales[posicionActual].nombre;
    let respuesta = confirm("Estas seguro que quieres eliminar este hospital?: (" + eliminarHospital + ").");
    if (respuesta == true) {
        hospitales.splice(hospitales[posicionActual], 1);
        posicionActual = 0;
        mostrarHospital();

    } else {
        alert("Sin problema");
    }
} //Eliminar Hospital 


function eliminarCine() {
    let eliminarCine = cines[posicionActual].nombre;
    let respuesta = confirm("Estas seguro que quieres eliminar este hospital?: (" + eliminarCine + ").");
    if (respuesta == true) {
        cines.splice(cines[posicionActual], 1);
        posicionActual = 0;
        mostrarCine();

    } else {
        alert("Sin problema");
    }
} //final eliminar Cine 