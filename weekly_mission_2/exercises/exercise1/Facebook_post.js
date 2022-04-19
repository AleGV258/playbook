// GitHub: @AleGV258
const post = {
    user: "VG Alejandro",
    description: "Hola, el día de hoy estoy aprendiendo a modelar objetos con NodeJS en JavaScript",
    typeOfPost: "Text",
    datePublication: "17/07/2015",
    numberReactions: 350,
    numberOfShared: 10,

    getPostData: function(){
        return `${this.user} publicó ${this.description} el ${this.datePublication} y se compartió ${this.numberOfShared} veces`
    }
}
console.log("Usuario: " + post.user)
console.log("Descripción: " + post.description)
console.log("Tipo de Post: " + post.typeOfPost)
console.log("Fecha de Publicación: " + post.datePublication)
console.log("Número de Reacciones: " + post.numberReactions)
console.log("Número de Compartidos: " + post.numberOfShared)
console.log(post.getPostData())