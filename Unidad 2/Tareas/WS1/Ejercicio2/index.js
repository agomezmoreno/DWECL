/**
 * Ejercicio 2.
 */

let fechaHoy = new Date();
document.write(fechaHoy);

document.write("<br>");

let fecha85 = new Date(fechaHoy);
fecha85.setDate(fecha85.getDate() + 85); 
document.write(fecha85);

document.write("<br>");

let fecha187 = new Date(fechaHoy);
fecha187.setDate(fecha187.getDate() - 187);
document.write(fecha187);

document.write("<br>");

let fecha2 = new Date(fecha85);
fecha2.setFullYear(fecha2.getFullYear() + 2);
document.write(fecha2);

document.write("<br>");

let fecha24 = new Date(fecha187);
fecha24.setHours(fecha24.getHours() - 24);
document.write(fecha24);

document.write("<br>");

let fechaResto = fecha85 - fecha187;
document.write(fechaResto);




