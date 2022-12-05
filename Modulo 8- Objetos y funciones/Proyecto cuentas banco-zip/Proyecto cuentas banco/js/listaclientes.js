const clientes=[];

function listaClientes(){
let cliente, nuevoCliente;

//dni,nombre,apellidos
cliente=new Cliente("22222222P","Paula","Melia Segarra");//constructor
clientes.push(cliente);

cliente=new Cliente("55555555S","Sandra","Melia Segarra");
clientes.push(cliente);

cliente=new Cliente("77777777R","Rafa","Melia España");
clientes.push(cliente);

cliente=new Cliente("88888888P","Paloma","Segarra Beltran");
clientes.push(cliente);


clientes[0].cuentas.push(new Cuenta("123"));
clientes[1].cuentas.push(new Cuenta("456"));
clientes[2].cuentas.push(new Cuenta("789"));
clientes[3].cuentas.push(new Cuenta("111"));

return("Clientes cargados");

}
console.log(listaClientes);