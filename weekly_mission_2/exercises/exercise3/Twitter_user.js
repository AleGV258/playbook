// GitHub: @AleGV258
class user {
    constructor(user, username, bio, accountVisibility, gender, pronouns, accountCreatedDate, numberTweets, age){
        this.user = user
        this.username = username
        this.bio = bio
        this.accountVisibility = accountVisibility
        this.gender = gender
        this.pronouns = pronouns
        this.accountCreatedDate = accountCreatedDate
        this.numberTweets = numberTweets
        this.age = age
    }

    get getuser(){
        return this.user
    }
    set setuser(user){
        this.user = user
    }
    get getusername(){
        return this.username
    }
    set setusername(username){
        this.username = username
    }
    get getbio(){
        return this.bio
    }
    set setbio(bio){
        this.bio = bio
    }
    get getaccountVisibility(){
        return this.accountVisibility
    }
    set setaccountVisibility(accountVisibility){
        this.accountVisibility = accountVisibility
    }
    get getgender(){
        return this.gender
    }
    set setgender(gender){
        this.gender = gender
    }
    get getpronouns(){
        return this.pronouns
    }
    set setpronouns(pronouns){
        this.pronouns = pronouns
    }
    get getaccountCreatedDate(){
        return this.accountCreatedDate
    }
    set setaccountCreatedDate(accountCreatedDate){
        this.accountCreatedDate = accountCreatedDate
    }
    get getnumberTweets(){
        return this.numberTweets
    }
    set setnumberTweets(numberTweets){
        this.numberTweets = numberTweets
    }
    get getage(){
        return this.age
    }
    set setage(age){
        this.age = age
    }
}
newuser = new user("Michell", "AleGV258", "Living the Life", "Non-Visible", "Hombre", "He/Him", "15/08/2015", 40, 20)
console.log(newuser)