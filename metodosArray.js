let nombres = ["jose","luis","garcia"];
document.write(nombres+"<br>");

//eliminar el último elemento del array
let resul = nombres.pop();
document.write("eliminaste "+ resul +"<br>");

//elimina el primero

resul = nombres.shift();
document.write("eliminaste "+ resul +"<br>");

//adiciona al final
resul = nombres.push("Quinayas");//result graba la cantidad de elementos
document.write("Adicionaste "+ nombres +"<br>");

