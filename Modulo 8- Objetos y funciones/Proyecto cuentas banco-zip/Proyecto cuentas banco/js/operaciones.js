
//BUSCAR ITEM
function buscar(nDni) { // esta funcion no tiene boton es para que vayan las otras funciones,ITEM
    let encontrado = false;
    let elementos = clientes.length;
    let i = 0;
    let indice = -1;
console.log(nDni);
    while (i < elementos && !encontrado) {
        if (clientes[i].dni.toLowerCase()== nDni.toLowerCase()) {
            indice = i;
            encontrado = true;
        } 
        i++;
    } 

    return indice;
} ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function buscarCuenta(cuenta){  // esta funcion no tiene boton es para que vayan las otras funciones,ITEM
    let encontrado = false;
    let elementos = clientes[posicionActual].cuentas.length;
    let i = 0;
    let indice = -1;

    while (i < elementos && !encontrado) {
        if (clientes[posicionActual].cuentas[i]== cuenta) {
            indice = i;
            encontrado = true;
        }
        i++;
    }
    
    return indice;

}  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//boton buscar, no se pedia pero lo he puesto-------------------------------------------------------------------------
function buscarCliente() { 
    let buscCliente = prompt("Que cliente quieres buscar,indica su DNI:", "77777777R");
    let indice = buscar(buscCliente);

    if (indice < 0) {
        alert("El cliente con ese DNI no esta en nuestra base de datos.");

    } else {
        posicionActual = indice; //para que se reubique
        mostrarCliente();
    } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
} 

function crearCliente() {
    let nuevoDni = prompt("Indica el dni del nuevo cliente: ", "dni");
    let indice = buscar(nuevoDni);
    nuevoDni = nuevoDni.toLowerCase();

    if (indice < 0) {
        let dni, nombre, apellidos;
        dni = nuevoDni;
        nombre = prompt("Nombre del nuevo cliente: ", "Nombre?");
        apellidos = prompt("Indica los dos apellidos del cliente: ", "1ºapellido y 2ºapellido?");


        cliente = new Cliente(dni, nombre, apellidos);
        clientes.push(cliente);
        posicionActual = clientes.length - 1;
        mostrarCliente();

    } else {
        alert("El cliente que quiere dar de alta ya existe!");
        posicionActual = indice;
        mostrarCliente();
    } //////////////////////////////////////////////////////////////////////////////////////////////////////////////

}


    function eliminarCliente() {
        let elimCliente=clientes[posicionActual].dni;

        let respuesta = confirm("Estas seguro que quieres eliminar este cliente con DNI: (" + elimCliente + ").");
        if(respuesta==true){
            clientes.splice(clientes[posicionActual],1);
            posicionActual = 0;
            mostrarCliente();

        }else{
            alert("Sin problema");
        }   

    } ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function crearCuenta(){

            let nuevaCuenta=prompt("Agregar número de cuenta,en el cliente en pantalla").toLowerCase();
            let indiceCuenta=buscarCuenta(nuevaCuenta);
            console.log(indiceCuenta)
            if (indiceCuenta==-1){ 
                let nuevoNumero=nuevaCuenta;
                let cuenta=new Cuenta(nuevoNumero);
                clientes[posicionActual].agregarCuenta(cuenta);
                mostrarCliente();
            } else{
                alert("Esta cuenta ya existe");
            }
       
        }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    function ingresarDineroCuenta(){
        let ingresar=prompt("Buscar cliente por DNI donde quieres ingresar dinero:").toLowerCase();
        posicionActual=buscar(ingresar);
        if (posicionActual!=-1){
            let cuentasCiente=clientes[posicionActual].cuentas;
            if (clientes[posicionActual].cuentas.length>0){
                let ingresar=0;
                let ingresartxt="¿En qué cuenta desea ingresar el dinero? Elegir el número de opción correspondiente:";
                let i=1;
                for (let cuenta of cuentasCiente){
                    ingresartxt+="\n"+i+" para "+cuenta.numero;
                    i++;
                }
                do {
                    ingresar=parseInt(prompt(ingresartxt));
                    if (ingresar<1 || ingresar>clientes[posicionActual].cuentas.length){
                        alert("Debe elegir una opción correcta");
                    } else{
                        indiceCuenta=ingresar-1;
                        let dinero=Number(prompt("Introduzca la cantidad a Ingresar"));
                        clientes[posicionActual].cuentas[indiceCuenta].ingresarDinero(dinero); 
                    }
                } while (ingresar<1 || ingresar>clientes[posicionActual].cuentas.length)
            }
            else{
                alert("Lo siento, no hay cuentas asociadas a este cliente actualmente");
            }
            mostrarItem();
        
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    function retirarDineroCuenta(){
        let nuevaCuenta=prompt("Buscar cliente por DNI:").toLowerCase();
        posicionActual=buscarCliente(nuevaCuenta);
        if (posicionActual!=-1){
            let cuentasCiente=Clientes[posicionActual].cuentas;
            if (clientes[posicionActual].cuentas.length>0){
                let retirar=0;
                let retirartxt="¿En qué cuenta desea retirar el dinero? Elegir el número de opción correspondiente:";
                let i=1;
                for (let cuenta of cuentasCiente){
                    retirar+="\n"+i+" para "+cuenta.numero;
                    i++;
                }
                do {
                    retirar=parseInt(prompt(retirartxt));
                    if (retirar<1 || retirar>clientes[posicionActual].cuentas.length){
                        alert("Debe elegir una opción correcta");
                    } else{
                        let indiceCuenta=retirar-1;
                        let dinero=Number(prompt("Introduzca la cantidad a retirar"));
                        clientes[posicionActual].cuentas[indiceCuenta].retirarDinero(dinero); 
                    }
                } while (retirar<1 || retirar>clientes[posicionActual].cuentas.length)
            }
            else{
                alert("Lo siento, no hay cuentas asociadas al cliente actualmente");
            }
            mostrarItem();
        } else{
            alert("Lo siento, el cliente que nos ha pedido no está dentro de nuestra aplicación");
        }
    
    }
}
 }
