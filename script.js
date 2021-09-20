//let num=20;
var num1=21;

//let nombre = prompt("Escribir nombre");
//alert(nombre);

//frase = `soy ${nombre} y estoy listo`;

//alert(num+ num1);


//document.write(frase);

//condicionales

var numero = 20;

if (numero == 10){
    alert("Es 10");
} 
else if (numero == 20){
    alert("Es 20");

}

//Arrays

arrays = ["Jose", 40, "Hola"];
document.write(arrays);

document.write("\n"+arrays[0]);

let pc ={ nombre:"JLPC",
            cpu:"i5",
            ram:"8Gb",
            SSD:"256 Gb"

}

document.write("\n"+pc["nombre"]);

//ciclos

let num=0;

while(num<=5){
    num++;
   // document.write("<br>"+num);

}

num=0;

do{
    document.write("<br>"+num);
    num++;

}while(num<5);

for(let i=0; i<=6;i++){
 //   document.write("<br>"+i);
}


let animals=["gato","perro","rex"];

for(animal in animals){ //in devuelve el indice
    document.write("<br>"+animal +"\n" + animals[animal]);
}
for(animal of animals){ //devuelve el valor
    document.write("<br>"+animal+"<br>");
}

//funciones

function saludar(nombre)
{
    alert("se ejecuta la función ");
    document.write(`Hola ${nombre} como estas?`);
}
saludar("Jose Luis");

function saludos()
{
    return "Listo, se retorno <br>";
}
let saludo = saludos();
document.write(saludo);

function suma(num10,num20)//parametros
{
    return num10 + num20;
}

document.write(suma(30,100));

//funcion flecha

const salud = (nombre)=> {
    document.write("<br>" + nombre)

}
salud("Pedro");

