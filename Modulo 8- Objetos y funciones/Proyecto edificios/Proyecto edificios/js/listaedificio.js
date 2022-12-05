

const hospitales=[];
function listaHospitales(){
    
    let hospital;  //nombre,nPlantas, superficie,tipo,enfermos

    hospital=new Hospital("Dexeus",50,"10000m2","Hospital",100);
    hospitales.push(hospital);
    
    hospital=new Hospital("Cruz Roja",30,"3000m2","Hospital",50);
    hospitales.push(hospital);
    
    hospital=new Hospital("Clinic",100,"9000m2","Hospital",150);
    hospitales.push(hospital);

    return("Hospitales cargados");
    
}




const hoteles=[];
function listaHoteles(){
let hotel;  //nombre,plantas,superficie,tipo,habitaciones

hotel=new Hotel("Hilton",200,"10000m2","Hotel",30);
hoteles.push(hotel);

hotel=new Hotel("Catalonia",30,"7000m2","Hotel",5);
hoteles.push(hotel);

hotel=new Hotel("Ayre",30,"500m2","Hotel",10);
hoteles.push(hotel);

return("Hoteles cargados");

}

const cines=[];
function listaCines(){
let cine;  //nombre,plantas,superficie,tipo,aforo

cine=new Cine("Cine Farga",5,"200m2","Cine",60);
cines.push(cine);

cine=new Cine("Cine Baix",3,"150m2","Cine",70);
cines.push(cine);

cine=new Cine("Cine FULL",10,"500m2","Cine",100);
cines.push(cine);

return("Cines cargados");

}
