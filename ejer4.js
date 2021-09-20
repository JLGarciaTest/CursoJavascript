class Celular{
    constructor(color, peso, rdp,rdc, ram){
        this.color=color;
        this.rdc=rdc;
        this.rdp=rdp;
        this.ram=ram;
        this.encedido=false;
    }
    presionarBotonEncendido(){
        if (!this.encedido){
            alert("celular pendido");
            this.encedido=true;
        }else{
            alert("celular apagado");
        }
    
    reiniciar(){
            if (this.encedido){
                alert("reiniciando");
            }else{
                alert("esta apagado");
            }
    }
    tomarFoto(){
        alert(`Foto tomado de resolucion: ${this.rdc}`);
    }
    grabarVideo(){
        alert(`video grabado de resolucion: ${this.rdc}`);
    }

    }
}

celular1= new Celular("Blanco","180g","5'","fulHH","2Gb")