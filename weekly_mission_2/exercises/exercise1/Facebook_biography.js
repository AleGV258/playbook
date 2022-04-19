// GitHub: @AleGV258
const biography = {
    user: "VG Alejandro",
    description: "Soy un chico apasionado de la tecnología que actualmente esta estudiando programación :D",
    datePublication: "20/06/2008",
    numberReactions: 200,

    getBiographyData: function(){
        return `${this.user} dice: ${this.description} el ${this.datePublication}`
    }
}
console.log("Usuario: " + biography.user)
console.log("Biografía: " + biography.description)
console.log("Fecha de Publicación: " + biography.datePublication)
console.log("Número de Reacciones: " + biography.numberReactions)
console.log(biography.getBiographyData())