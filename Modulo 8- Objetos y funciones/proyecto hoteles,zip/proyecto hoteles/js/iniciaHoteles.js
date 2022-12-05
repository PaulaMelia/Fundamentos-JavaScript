const hoteles=[];

function iniciaHoteles(){
let hotel, nuevoNombre;


hotel=new Hotel("Plaza Lesseps",21,3,"1000m2");//constructor
hoteles.push(hotel);

hotel=new Hotel("Hilton",200,10,"10000m2");
hoteles.push(hotel);

hotel=new Hotel("Catalonia",30,5,"7000m2");
hoteles.push(hotel);

hotel=new Hotel("Princess",40,5,"7500m2");
hoteles.push(hotel);

hotel=new Hotel("Ayre",30,3,"500m2");
hoteles.push(hotel);


//nuevoNombre=document.getElementById("hotelBuscar").value;
//console.log(nuevoNombre);
//console.table(hoteles);
//hoteles[0].setnombre("nuevonombre");

return("Hoteles cargados");

}

//window.onload=function(){
//console.log(iniciaHoteles());
//console.log(hoteles)

//}