class Cliente{
 constructor(dni,nombre,apellidos){
this.dni=dni;
this.nombre=nombre;
this.apellidos=apellidos;
this.cuentas=[];  //para ir metiendo las cuentas de los clientes
}

//Getters

getdni(){
    return this.dni;
}
getnombre(){
    return this.nombre;
}

getapellidos(){
    return this.apellidos;
}

//Setters

setdni(nuevodni) {
    this.dni = nuevodni;
}
setnombre(nuevonombre){
    this.nombre=nuevonombre;
}
setapellidos(nuevoapellidos){
    this.apellidos=nuevoapellidos;
}

toString() {
    let resultado = " CARACTERISTICAS CLIENTE ";
    resultado += "<br>Nº DNI: " + this.dni;
    resultado += "<br>Nombre: " + this.nombre;
    resultado += "<br>Apellidos: " + this.apellidos;
    if (this.cuentas.length>0){
        resultado += "<br> <b>Cuentas Asociadas: </b>"+this.cuentas.length +"<br>";
        console.log(this.cuentas)
        for(let i=0; i<this.cuentas.length; i++){
            //resultado += "<br> Cuenta: " + this.cuentas[i].numero+" / Saldo: "+this.cuentas[i].saldo+" euros";
            resultado+= "<b>Datos de la Cuenta: </b>" + (i+1);
            resultado+= this.cuentas[i].toString()+"<br>";
        }
    }
    return resultado;
}



agregarCuenta(cuenta){
    this.cuentas.push(cuenta);
    alert("Tu cuenta "+ cuenta.numero + " ha sido dada de alta.")  //numero de cuenta
   }
} //final de la clase clientes




//-------------------------------------------------------------
class Cuenta{
    constructor(numero){
     this.numero=numero;
     this.saldo=0;
    }

    getnumero(){
        return this.numero
    }
    getsaldo(){
        return this.saldo;
    }
    
    setnumero(nuevoNumero){
        this.numero=nuevoNumero
    }
    setsaldo(nuevoSaldo){
        this.saldo=nuevoSaldo
    }

    //operaciones de ingresar dinero y quitar dinero:
    ingresarDinero(cantidad){
        this.saldo+=cantidad;
        alert("Operación realizada correctamente.\nFueron ingresados: "+cantidad+" euros en la cuenta "+this.numero+"\nSaldo actual: "+this.saldo+" euros");
    }
    retirarDinero(cantidad){
        let mensaje;
        if (cantidad>this.saldo){
            mensaje="Lo siento, no puede retirar una cantidad mayor a tu saldo";
        }
        else{
            this.saldo-=cantidad;
            mensaje="Operación realizada correctamente.\nFueron retirados: "+cantidad+" euros en la cuenta "+this.numero+"\nSaldo actual: "+this.saldo+" euros";
        }
        alert(mensaje);
    }

    ingresarDinero(cantidad){
        this.saldo+=cantidad;
        alert("Operación realizada exitosamente.\nFueron ingresados: "+cantidad+" euros en la cuenta "+this.numero+"\nSaldo actual: "+this.saldo+" euros");
    }
    retirarDinero(cantidad){
        let mensaje;
        if (cantidad>this.saldo){
            mensaje="Lo siento, no puede retirar una cantidad mayor a su saldo";
        }
        else{
            this.saldo-=cantidad;
            mensaje="Operación realizada exitosamente.\nFueron retirados: "+cantidad+" euros en la cuenta "+this.numero+"\nSaldo actual: "+this.saldo+" euros";
        }
        alert(mensaje);
    }
  
   toString(){
    //let resultado = "<b>Datos de la Cuenta:</b>";
        let resultado = "<br>Número: " + this.numero;
        resultado+= "<br>Saldo: " + this.saldo;
        return resultado;

   }

}  //final de la clase cuenta
















































