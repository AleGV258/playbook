// GitHub: @AleGV258
console.log("Objetos")

// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
        console.log(`${this.name} saluda a ${yourPet} con felicidad`)
    }
}
console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Rocky")