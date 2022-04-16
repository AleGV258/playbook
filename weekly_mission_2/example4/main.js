// GitHub: @AleGV258
import Viajero from './viajero.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/

const viajero1 = new Viajero("Michell", "LaunchX", "NodeJS", "Abril 2022")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) // Método de la clase hija

