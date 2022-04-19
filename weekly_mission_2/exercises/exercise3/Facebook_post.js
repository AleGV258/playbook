// GitHub: @AleGV258
class post {
    constructor(user, description, typeOfPost, datePublication, numberReactions, numberOfShared){
        this.user = user
        this.description = description
        this.typeOfPost = typeOfPost
        this.datePublication = datePublication
        this.numberReactions = numberReactions
        this.numberOfShared = numberOfShared
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
    get gettypeOfPost(){
        return this.typeOfPost
    }
    set settypeOfPost(typeOfPost){
        this.typeOfPost = typeOfPost
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
    get getnumberOfShared(){
        return this.numberOfShared
    }
    set setnumberOfShared(numberOfShared){
        this.numberOfShared = numberOfShared
    }
}
newpost = new post("VG Alejandro", "Hola, el día de hoy estoy aprendiendo a modelar objetos con NodeJS en JavaScript", "Text", "17/07/2015", 350, 10)
console.log(newpost)