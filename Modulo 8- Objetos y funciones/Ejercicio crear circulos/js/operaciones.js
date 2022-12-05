function calcularCirculos(){

    
    let circulo1,puntoX1,puntoY1,centro1,radio1;
    puntoX1= (document.getElementById("puntoX1").value);
    puntoY1= (document.getElementById("puntoY1").value);
    radio1= (document.getElementById("radio1").value);

    centro1= new Punto(puntoX1,puntoY1);
    circulo1= new Circulos(centro1,radio1);
    console.log(circulo1);

    let circulo2,puntoX2,puntoY2,centro2,radio2;
    puntoX2= (document.getElementById("puntoX2").value);
    puntoY2=(document.getElementById("puntoY2").value);
    radio2= (document.getElementById("radio2").value);

    centro2= new Punto(puntoX2,puntoY2);
    circulo2= new Circulos(centro2,radio2);
    console.log(circulo2);


    document.getElementById("ResultadoDistancia").innerHTML= "La distancia entre circulos es de: " +circulo1.distanciaCirculos(circulo2);
    
    ////////////////////////////////////////

    












}//final boton Calcular Circulos