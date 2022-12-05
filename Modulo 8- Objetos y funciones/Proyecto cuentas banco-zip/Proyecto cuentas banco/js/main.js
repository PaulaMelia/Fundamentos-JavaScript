document.getElementById("tema").innerHTML = "Clientes"; //TEMA es para el titulo Principal,const de objetos

listaClientes();
let posicionActual = 0;
mostrarCliente();
console.table(clientes);



function mostrarCliente() { //1 -lo primero que hacemos,para que se muestre todo,
   
    let dni=clientes[posicionActual].toString();
   //let cuentas = clientes[posicionActual].cuentas.toString();
    //let apellidos = clientes[posicionActual].toString();
    //console.log(nombre);
    

    document.getElementById("dniCliente").innerHTML = dni;
  
    //document.getElementById("apellidos").innerHTML = apellidos;
    

}

function avanzar(){
    if (posicionActual<(clientes.length-1)){
        posicionActual++;
    }
    else{
        posicionActual=0;
    }
    mostrarCliente();
}

function retroceder(){
    if (posicionActual>0){
        posicionActual--;
    }
    else{
        posicionActual=clientes.length-1;
    }
    mostrarCliente();
}