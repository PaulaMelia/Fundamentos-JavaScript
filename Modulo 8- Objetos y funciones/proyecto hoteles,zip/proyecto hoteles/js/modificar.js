function modificarHotel(){
    let modHotel = confirm("Quieres modificar el hotel que aparece en pantalla?");
    
    if (modHotel) {
        let hotelModificar= hoteles[posicionActual];
        let nuevonombre=prompt("Como quieres llamar a la imagen?",hotelModificar.getnombre());
        hotelModificar.setnombre(nuevonombre);
        let nuevoNhabitaciones=prompt("Que nombre le quieres poner a la imagen?",hotelModificar.getnHabitaciones());
        hotelModificar.setnHabitaciones(nuevoNhabitaciones);
        let nuevoNplantas=prompt("Que titulo le quieres poner a la imagen",hotelModificar.getnPlantas());
        hotelModificar.setnPlantas(nuevoNplantas);
        let nuevasuperficie=prompt("Que descripcion quieres poner?",hotelModificar.getsuperficie());
        hotelModificar.setsuperficie(nuevasuperficie);
    
    //añadimos los nuevos datos
    //hoteles.splice(posicionActual,1,nuevosDatos);
    mostrarHotel();
    
    } else { 
    alert("Sin problema");
    }
    
    }
