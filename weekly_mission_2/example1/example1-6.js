// GitHub: @AleGV258
console.log("Operadores")

// Ejemplo 6: Uso de map para regresar las tres primeras letras del nombre en mayúscula
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 6: Uso de map para convertir las tres primeras letras de los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)