// 1. El Objeto Date()
// set sirve para modificar el valor
// get para obtener
// requiere ser instanciado para utilizar. Excepto Date.now
const diaHoy = new Date();
let valor;

valor = diaHoy;

console.log(valor);
console.log(typeof valor);// object

const fechaNacimiento = new Date('11-8-1981');//mes-dia-año
console.log(fechaNacimiento);

// Métodos de Fechas
const fechayear = diaHoy.getFullYear();// año actual
const fechaMes = diaHoy.getMonth(); //Mes Actual. Los meses inician en 0, es decir, Enero es 0 y Diciembre 11
console.log("Año: " + fechayear);
console.log("Mes:" + fechaMes);

const fechaMinutos = diaHoy.getMinutes();
const fechaHoras = diaHoy.getHours();
console.log("Minutos: " + fechaMinutos);
console.log("Hora:" + fechaHoras);

const fechaTiempo = diaHoy.getTime();//Muestra los milisegundos que han transcurridos del 1 de enero 1970 hasta ahora
console.log("tiempo en milisegundos:" + fechaTiempo);

// Estos métodos convierta la fecha actual en el formato del país donde vives  
const fechaYHoraLocalEnString = diaHoy.toLocaleString();
console.log("fechaYHoraLocalEnString: " + fechaYHoraLocalEnString);

const horaLocalEnString = diaHoy.toLocaleTimeString();
console.log("horaLocalEnString: " + horaLocalEnString);

const fechaLocalEnString = diaHoy.toLocaleDateString();
console.log("fechaLocalEnString: " + fechaLocalEnString);