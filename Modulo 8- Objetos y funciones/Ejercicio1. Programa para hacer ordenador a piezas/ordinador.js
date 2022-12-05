class Ordenador {
    constructor(marca, procesador, ram, disco) {
        this.marca = marca;
        this.procesador = procesador;
        this.ram = ram;
        this.disco = disco;
    }
// GETTERS.............................................................
    getmarca() {
        return this.marca;
    }
    getprocesador() {
        return this.procesador;
    }
    getRam() {
        return this.ram;
    }
    getDisco() {
        return this.disco;

    }

    // SETTERS................................................................     
         setProcesador(nuevoProcesador){
            this.procesador=nuevoProcesador;
         }

         setRam(nuevaRam){
            this.ram=nuevaRam;
         }
         setDisco(nuevoDisco){
            this.disco=nuevoDisco;
         }

      // OTROS..............................................................
        ejecutarOrdenador(programa){
         return "En estos momentos se esta ejecutando:" + programa;

        }

        toString(){
        let resultado=" CARACTERISTICAS ORDENADOR";
        resultado+= "\nmarca" + this.marca;
        resultado+="\nprocesador" + this.procesador;
        resultado+="\nram" + this.ram;
        resultado+="\ndisco" + this.disco;
        return resultado;
        }







    }//llave de class ordenador