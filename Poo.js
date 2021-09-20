class Animal{
    constructor(especie,edad, color){
        this.edad=edad;
        this.especie=especie;
        this.color=color;
        this.info=`Soy ${this.especie}, tengo ${this.edad} años 
        y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");
  }

}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color)  // hererando de la clase padre
        this.raza=raza;
    }
    set setRaza(newRaza){ //definir método Setter
        this.raza=newRaza;
    }
    get getRaza(){
        return this.raza;

    }

    ladrar(){
        document.write("WOW")
    }
}

const  perro = new Perro("perro",5,"beige","Beagle");


//document.write(perro.color);
perro.ladrar();
perro.verInfo();
document.write(perro.raza);
perro.setRaza="Pincher"; //Asiganar a Setter
document.write(perro.getRaza);