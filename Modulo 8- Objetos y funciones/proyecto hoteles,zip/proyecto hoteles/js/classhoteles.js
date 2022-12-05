class Hotel {
    constructor(nombre, nHabitaciones, nPlantas, superficie) {
        this.nombre = nombre;
        this.nHabitaciones = nHabitaciones;
        this.nPlantas = nPlantas;
        this.superficie = superficie;
    }

    //GETTERS
    getnombre() {
        return this.nombre;
    }
    getnHabitaciones() {
        return this.nHabitaciones;
    }
    getnPlantas() {
        return this.nPlantas;
    }
    getsuperficie() {
        return this.superficie;
    }

    //SETTERS
    setnombre(nuevonombre) {
        this.nombre = nuevonombre;
    }
    setnHabitaciones(nuevoNhabitaciones) {
        this.nHabitaciones = nuevoNhabitaciones;
    }
    setnPlantas(nuevoNplantas) {
        this.nPlantas = nuevoNplantas;
    }
    setsuperficie(nuevasuperficie) {
        this.superficie = nuevasuperficie;
    }



    //metodo para calcular lo que cuesta mantener un hotal
    calcularMantenimiento() {

        const COSTE_MANTENIMIENTO = 1500;

        let personas = parseInt(this.nHabitaciones / 20);
        if (this.nHabitaciones % 20 > 1) {
            personas++;
        }
        let mantenimiento = personas * COSTE_MANTENIMIENTO;
        let respuesta = "Se necesitan " + personas + " personas para mantener este hotel y el coste es de: "+ mantenimiento;
        return respuesta;
    }

    toString() {
        let resultado = "CARACTERISTICAS HOTEL ";
        resultado += "<br>Nombre hotel: " + this.nombre;
        resultado += "<br>Numero de habitaciones: " + this.nHabitaciones;
        resultado += "<br>Numero de plantas: " + this.nPlantas;
        resultado += "<br>Superficie total: " + this.superficie;
        return resultado;
    }

}
//final de la class