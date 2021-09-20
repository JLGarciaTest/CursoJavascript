let cadena ="cadena, de, prueba";
let cadena2 ="cadena 2";
let cadena3 ="de ";
//concatenar
resul=cadena.concat(cadena2);
document.write(resul+' <br>');

resul=cadena.startsWith(cadena2);
document.write(resul+' <br>');

//busca texto dentro de cadena

resul= cadena.includes(cadena3);
document.write(resul+' <br>');
//repite la cadena la n veces
resul=cadena.repeat(3);
document.write(resul+' <br>');

//divede la cadena por , y regresa un array
resul=cadena.split(",");
document.write(resul[1]+' <br>');

//divede la cadena por entre los index pasados
//en este caso el 5 esta incluido el 10 no.
resul=cadena.substring(5,10);
document.write(resul+' <br>');

//Eliminar espacios en blanco
resul=cadena.trim();
document.write(resul+' <br>');
