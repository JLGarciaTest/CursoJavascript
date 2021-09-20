let free=false;

const validarCliente=(time)=> {
    let edad = prompt("Edad?");
    if(edad>=18){
        if(time>=2 && time <7 && !free ){
            alert("Podes pasar Gratis, eres el primero despues de las 2 AM");
            free=true;

        }else {
            alert("Pasa, pero pagando");
        }

    }
    else {
        alert("Eres menor");
    }
}

validarCliente(5);
