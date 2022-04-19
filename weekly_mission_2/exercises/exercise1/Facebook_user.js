// GitHub: @AleGV258
const user = {
    user: "VG Alejandro",
    city: "Querétaro",
    school: "UAQ",
    gender: "Hombre",
    birthday: "25/08/2001",
    age: 20,
    numberFriends: 250,

    getFacebookUserData: function(){
        return `${this.user} vive en ${this.city} cumple años el ${this.birthday} y tiene ${this.numberFriends} amigos`
    }
}
console.log("Nombre: " + user.user)
console.log("Ciudad: " + user.city)
console.log("Escuela: " + user.school)
console.log("Género: " + user.gender)
console.log("Cumpleaños: " + user.birthday)
console.log("Edad: " + user.age)
console.log("Cantidad de Amigos: " + user.numberFriends)
console.log(user.getFacebookUserData())