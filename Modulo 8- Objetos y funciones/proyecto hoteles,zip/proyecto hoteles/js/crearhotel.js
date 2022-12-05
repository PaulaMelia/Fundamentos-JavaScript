
function crearHotel(){
    let nuevonombre=prompt("Indica el nombre del hotel: ","nombre");
    let indice=buscar(nuevonombre);
nuevonombre= nuevonombre.toLowerCase();

if(indice<0){
let nombre, nHabitaciones, nPlantas, superficie;
nombre= nuevonombre;
nHabitaciones= prompt("Cuantas habitaciones tiene el hotel","habitaciones");
nPlantas=prompt("Cuantas plantas tiene el hotel?","plantas");
superficie=prompt("Cuantos m2 de superficie tiene el hotel?","m2");

hotel= new Hotel(nombre, nHabitaciones, nPlantas, superficie);
hoteles.push(hotel);
posicionActual=hoteles.length-1;
mostrarHotel();

}else{
    alert("El hotel que quieres agregar ya existe");
    posicionActual= indice;
    mostrarHotel();
}

}