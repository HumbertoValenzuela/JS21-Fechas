// ejemplos de la librería Moment.js
// En el index estan agregados moment.min.js
// moment/locale nos permite que las fechas esten en español

const diasHoy = new Date();

moment.locale('es');//Fechas en español
console.log(moment().format("MMM Do YY"));//abr. 7º 21
console.log(moment().format("MMMM DD YYYY"));//abril 07 2021
console.log(moment().format("MM DD YYYY HH:mm:ss a"));//04 07 2021 23:27:34 pm

console.log(moment().format('L'));// 07/04/2021