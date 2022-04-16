// GitHub: @AleGV258
console.log("Objetos")

// Ejemplo 4: Objeto con métodos
const pet = {
    name: "Rocky",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
        // this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te ladra de felicidad!`)
    }
}
console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()
