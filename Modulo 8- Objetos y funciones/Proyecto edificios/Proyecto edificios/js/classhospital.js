class Hospital extends Edificio {
    constructor(nombre,nPlantas, superficie,tipo,enfermos) {
     super(nombre,nPlantas, superficie,tipo);
     this.enfermos=enfermos;


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
getenfermos() {
    return this.enfermos;
}


toString() {
    let resultado = "CARACTERISTICAS HOSPITAL ";
    resultado += "<br>Nombre Edificio: " + this.nombre;
    resultado += "<br>Numero de plantas: " + this.nPlantas;
    resultado += "<br>Superficie total: " + this.superficie;
    resultado+="<br> Tipo de edificio: " + this.tipo;
    resultado+= "<br>Numero de enfermos: " + this.enfermos;
    return resultado;
}




}//Final de la clase 