// GitHub: @AleGV258
class profile {
    constructor(name, stars, numberTravels, gender, pronouns, mail, telephone){
        this.name = name
        this.stars = stars
        this.numberTravels = numberTravels
        this.gender = gender
        this.pronouns = pronouns
        this.mail = mail
        this.telephone = telephone
    }

    get getname(){
        return this.name
    }
    set setname(name){
        this.name = name
    }
    get getstars(){
        return this.stars
    }
    set setstars(stars){
        this.stars = stars
    }
    get getnumberTravels(){
        return this.numberTravels
    }
    set setnumberTravels(numberTravels){
        this.numberTravels = numberTravels
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
    get getmail(){
        return this.mail
    }
    set setmail(mail){
        this.mail = mail
    }
    get gettelephone(){
        return this.telephone
    }
    set settelephone(telephone){
        this.telephone = telephone
    }
}
newprofile = new profile("Michell Alejandro GV", 4.7, 348, "Hombre", "He/Him", "ale.gv258@gmail.com", "442-439-2997")
console.log(newprofile)