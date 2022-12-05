class Circulos{
constructor(centro,radio){
    this.centro=centro
    this.radio=radio
}

//METODOS

distanciaCirculos(circulo2){//Retorna la distància entre el centre del cercle actual i el rebut com a paràmetre.
    let distanciaX2=(this.centro.puntoX-circulo2.centro.puntoX)**2;
    let distanciaY2=(this.centro.puntoY-circulo2.centro.puntoY)**2;
    let distancia=Math.sqrt(distanciaX2+distanciaY2);
   //circulo1.metodo(circulo2)
    return distancia;
}

igualCirculos(circulo2){//Retorna true si dos cercles són iguals /si tenen el mateix centre i el mateix radi/.




}


}//FINAL CLASS CIRCULOS