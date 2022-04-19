// GitHub: @AleGV258
class hashtag {
    constructor(title, datePublication, numberTweets, description){
        this.title = title
        this.datePublication = datePublication
        this.numberTweets = numberTweets
        this.description = description
    }

    get gettitle(){
        return this.title
    }
    set settitle(title){
        this.title = title
    }
    get getdatePublication(){
        return this.datePublication
    }
    set setdatePublication(datePublication){
        this.datePublication = datePublication
    }
    get getnumberTweets(){
        return this.numberTweets
    }
    set setnumberTweets(numberTweets){
        this.numberTweets = numberTweets
    }
    get getdescription(){
        return this.description
    }
    set setdescription(description){
        this.description = description
    }
}
newhashtag = new hashtag("Woopa", "15/04/2022", 80, "El nuevo nombre de la mascota de MissionNodeJS")
console.log(newhashtag)