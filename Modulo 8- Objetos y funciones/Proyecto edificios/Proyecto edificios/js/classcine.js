class Cine extends Edificio{
    constructor(nombre,nPlantas,superficie,tipo,aforo) {
     super(nombre,nPlantas,superficie,tipo);
     this.aforo=aforo;


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
getaforo() {
    return this.aforo;
}


toString() {
    let resultado = "CARACTERISTICAS CINE ";
    resultado += "<br>Nombre Edificio: " + this.nombre;
    resultado += "<br>Numero de plantas: " + this.nPlantas;
    resultado += "<br>Superficie total: " + this.superficie;
    resultado+="<br> Tipo de edificio: " + this.tipo;
    resultado+= "<br>Numero de aforo: " + this.aforo;
    return resultado;
}

proyectarSesion(asistentes,precioEntrada){
    let respuesta;
if(asistentes<=this.aforo){
    let costSesion=asistentes*precioEntrada;
    respuesta= "Se ha recaudado "+costSesion+ " €";

}else{
    proyeccion="Se ha superado el aforo, lo sentimos";
}
return proyeccion;
}











}//Final de la clase