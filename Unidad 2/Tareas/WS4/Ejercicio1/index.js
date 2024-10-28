/**
 * Ejercicio 1
 */


document.write("<table border='1' style='border-collapse: collapse; width: 100%;'>");

document.write("<tr><th>Propiedad</th><th>Valor</th></tr>");

document.write("<tr><td>Nombre del Navegador</td><td>" + navigator.appName + "</td></tr>");
document.write("<tr><td>Versión del Navegador</td><td>" + navigator.appVersion + "</td></tr>");
document.write("<tr><td>Plataforma</td><td>" + navigator.platform + "</td></tr>");
document.write("<tr><td>User Agent</td><td>" + navigator.userAgent + "</td></tr>");
document.write("<tr><td>Idioma</td><td>" + navigator.language + "</td></tr>");
document.write("<tr><td>User Language</td><td>" + navigator.userLanguage + "</td></tr>");
document.write("<tr><td>Cookies Habilitadas</td><td>" + navigator.cookieEnabled + "</td></tr>");
document.write("<tr><td>Geolocalización</td><td>" + (navigator.geolocation ? 'Sí' : 'No') + "</td></tr>");

document.write("</table>");
