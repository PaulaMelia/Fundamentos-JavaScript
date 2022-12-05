
const ordenadores=[] ;

function crearOrdenadores(){
    for(let i=0;i<2; i++){
    marca=prompt("Que marca de ordenador buscas?:", "MSI");
    procesador=prompt("Que procesador necesitas?:", "i7");
    memoriaRAM=prompt("De cuanto quieres la memoria RAM?:","16GB corasair");
    capacidadDisco=prompt("De que capacidad quieres el disco duro?:","SSD NvM 500");

ordenadores[i]= new Ordenador (marca, procesador, memoriaRAM, capacidadDisco);
console.log(ordenadores[i]);
}

}

//funcion que mostrara la infomacion---------------------------------------
function mostrar(ordenador,caracteristica){
  const caracteristicas={
    total: ordenador.toString(),
    marca: ordenador.getmarca(),
    procesador:ordenador.getprocesador(),
    ram:ordenador.getRam(),
    disco:ordenador.getDisco()
  };
  alert(caracteristicas.total);

}

//MODIFICAR Procesador,Ram y disco por los de los prompt-------------------
function cambiarProcesador(ordenador){
let procesador= ordenador.getprocesador();  //cogemos el get 

let nuevoProcesador=prompt("Escribe el nuevo procesador", "Intel core 7");
ordenador.setProcesador(nuevoProcesador);//ponemos el set para modificar
alert("El procesador se ha cambiado al modelo:" + nuevoProcesador);
}
//---------------------
function cambiarRam(ordenador){
let ram= ordenador.getRam();

let nuevaRam= prompt("Escribe la nueva memoria RAM:", "Corsair RGB Pro");
ordenador.setRam(nuevaRam);
alert(" La memoria RAM se ha cambiado al modelo:" + nuevaRam);

}
//---------------------------------
function cambiarDisco(ordenador){
let disco= ordenador.getDisco();

let nuevoDisco=prompt("Escribe el nuevo disco duro:", "SSD Crucial P2 1 TB ");
ordenador.setDisco(nuevoDisco);
alert("El nuevo disco ha cambiado al modelo:" + nuevoDisco);


}

//EJECUTAR UN PROGRAMA

function ejecutarOrdenador(ordenador,programa){
    alert(ordenador.ejecutarOrdenador(programa));


}