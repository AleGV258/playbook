// GitHub: @AleGV258
const travel = {
    user: "Michell",
    driver: "Marcos",
    car: "Nissan 2017 gris",
    driverStars: 4.8,
    travelTime: "45 minutos",
    travelDestination: "La Alameda",
    travelOrigin: "Ciudad del Sol",
    payMethod: "Efectivo",
    cost: 250.00,

    getTravelData: function(){
        return `${this.driver} ha aceptado el viaje de ${this.user} que dura ${this.travelTime} y va hacía ${this.travelDestination}`
    }
}
console.log("Usuario: " + travel.user)
console.log("Conductor: " + travel.driver)
console.log("Estrellas del Conductor: " + travel.driverStars)
console.log("Automóvil: " + travel.car)
console.log("Tiempo del Viaje: " + travel.travelTime)
console.log("Destino: " + travel.travelDestination)
console.log("Origen: " + travel.travelOrigin)
console.log("Forma de Pago: " + travel.payMethod)
console.log("Costo: " + travel.cost)
console.log(travel.getTravelData())