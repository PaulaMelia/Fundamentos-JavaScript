class Hotel extends Edificio {
    constructor(nombre,nPlantas, superficie,tipo,nHabitaciones) {
     super(nombre,nPlantas, superficie,tipo);
     this.nHabitaciones=nHabitaciones;


    }



//GETTERS
getnombre() {
    return this.nombre;
}
getnPlantas() {
    return this.nPlantas;
}
getsuperficie() {
    return this.superficie;
}
gettipo(){
    return this.tipo;
}
getnHabitaciones() {
    return this.nHabitaciones;
}

toString() {
    let resultado = "CARACTERISTICAS HOTEL ";
    resultado += "<br>Nombre Edificio: " + this.nombre;
    resultado += "<br>Numero de plantas: " + this.nPlantas;
    resultado += "<br>Superficie total: " + this.superficie;
    resultado+="<br> Tipo de edificio: " + this.tipo;
    resultado+= "<br>Numero de habitaciones: " + this.nHabitaciones;
    return resultado;
}

vigilancia(){
let numVigilantes=Math.ceil(this.superficie/1000);
let costVigilancia= numVigilantes*1300+numVigilantes*500;
let total= "Se neceitan "+numVigilantes+" persones per vigilar el hotel amb un cost mensual de "+costVigilancia;
return total;
}


}//Final de la clase 