// GitHub: @AleGV258
const profile = {
    name: "Michell Alejandro GV",
    stars: 4.7,
    numberTravels: 348,
    gender: "Hombre",
    pronouns: "He/Him",
    mail: "ale.gv258@gmail.com",
    telephone: "442-439-2997",

    getProfileStatus: function(){
        return `${this.name} tiene ${this.stars} estrellas, es ${this.gender}, y lo puedes contactar en ${this.telephone}`
    }
}
console.log("Nombre: " + profile.name)
console.log("Estrellas: " + profile.stars)
console.log("Número de Viajes: " + profile.numberTravels)
console.log("Género: " + profile.gender)
console.log("Pronombres: " + profile.pronouns)
console.log("Correo Electrónico: " + profile.mail)
console.log("Celular: " + profile.telephone)
console.log(profile.getProfileStatus())