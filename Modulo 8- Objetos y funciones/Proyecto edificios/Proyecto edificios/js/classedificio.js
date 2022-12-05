class Edificio {
    constructor(nombre,nPlantas, superficie,tipo) {
        this.nombre = nombre;
        this.nPlantas = nPlantas;
        this.superficie = superficie;
        this.tipo=tipo;
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


toString() {
    let resultado = "CARACTERISTICAS EDIFICIO ";
    resultado += "<br>Nombre Edificio: " + this.nombre;
    resultado += "<br>Numero de plantas: " + this.nPlantas;
    resultado += "<br>Superficie total: " + this.superficie;
    resultado+="<br> Tipo de edificio: " + this.tipo;
    return resultado;
}

//metodos

/*limpiar(){
    const GANANCIA_MINUTO = 1; //1 euro

    let minutos= parseInt(this.superficie /5);
    if (this.nPlantas > 1) {
        (nPlantas-60*30)= nPlantas+ minutos
        minutos++;
    }
    let limpieza= minutos * GANANCIA_MINUTO;
    let respuesta = "Se necesitan " + minutos + " segundos para mantener este edificio limpioy el coste es de: "+ limpieza;
    return respuesta;

}*/



} //Final de la clase Edificio