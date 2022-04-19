// GitHub: @AleGV258
class biography {
    constructor(user, description, datePublication, numberReactions){
        this.user = user
        this.description = description
        this.datePublication = datePublication
        this.numberReactions = numberReactions
    }

    get getuser(){
        return this.user
    }
    set setuser(user){
        this.user = user
    }
    get getdescription(){
        return this.description
    }
    set setdescription(description){
        this.description = description
    }
    get getdatePublication(){
        return this.datePublication
    }
    set setdatePublication(datePublication){
        this.datePublication = datePublication
    }
    get getnumberReactions(){
        return this.numberReactions
    }
    set setnumberReactions(numberReactions){
        this.numberReactions = numberReactions
    }
}
newbiography = new biography("VG Alejandro", "Soy un chico apasionado de la tecnología que actualmente esta estudiando programación :D", "20/06/2008", 200)
console.log(newbiography)
