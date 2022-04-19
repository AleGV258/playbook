// GitHub: @AleGV258
const user = {
    user: "Michell",
    username: "AleGV258",
    bio: "Living the Life",
    accountVisibility: "Non-Visible",
    gender: "Hombre",
    pronouns: "He/Him",
    accountCreatedDate: "15/08/2015",
    numberTweets: 40,
    age: 20,

    getData: function(){
        return `${this.username} dice ${this.bio}`
    }
}
console.log("Nombre: " + user.user)
console.log("Usuario: " + user.username)
console.log("Biografía: " + user.bio)
console.log("Visibilidad: " + user.accountVisibility)
console.log("Género: " + user.gender)
console.log("Pronombres: " + user.pronouns)
console.log("Fecha de Creación: " + user.accountCreatedDate)
console.log("Número de Tweets: " + user.numberTweets)
console.log("Edad: " + user.age)
console.log("Información general de " + user.getData())