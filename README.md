# JS21-Fechas
JS 21 Fechas
* 1. El Objeto Date()
*  set sirve para modificar el valor
* get para obtener
* requiere ser instanciado para utilizar. Excepto Date.now
* diaHoy.getFullYear(); diaHoy.getMonth(); diaHoy.getMinutes(); diaHoy.getHours(); diaHoy.getTime();
* diaHoy.toLocaleString(); diaHoy.toLocaleTimeString(); diaHoy.toLocaleDateString();
* ejemplos de la librería Moment.js
```javascript
const diasHoy = new Date();

moment.locale('es');//Fechas en español
console.log(moment().format("MMM Do YY"));//abr. 7º 21
console.log(moment().format("MMMM DD YYYY"));//abril 07 2021
console.log(moment().format("MM DD YYYY HH:mm:ss a"));//04 07 2021 23:27:34 pm

console.log(moment().format('L'));// 07/04/2021
```
