function bajaHotel() {
    let elimHotel=hoteles[posicionActual].nombre;

    let respuesta = confirm("Estas seguro que quieres eliminar este hotel?: (" + elimHotel + ").");
    if(respuesta==true){
        hoteles.splice(hoteles[posicionActual],1);
        posicionActual = 0;
        mostrarHotel();

    }else{
        alert("Sin problema");
    }   

} 

   

        