// GitHub: @AleGV258
class user {
    constructor(user, city, school, gender, birthday, age, numberFriends){
        this.user = user
        this.city = city
        this.school = school
        this.gender = gender
        this.birthday = birthday
        this.age = age
        this.numberFriends = numberFriends
    }

    get getUser(){
        return this.user
    }
    set setUser(user){
        this.user = user
    }
    get getCity(){
        return this.city
    }
    set setCity(city){
        this.city = city
    }
    get getSchool(){
        return this.school
    }
    set setSchool(school){
        this.school = school
    }
    get getGender(){
        return this.gender
    }
    set setGender(gender){
        this.gender = gender
    }
    get getBirthday(){
        return this.birthday
    }
    set setBirthday(birthday){
        this.birthday = birthday
    }
    get getAge(){
        return this.age
    }
    set setAge(age){
        this.age = age
    }
    get getNumberFriends(){
        return this.numberFriends
    }
    set setNumberFriends(numberFriends){
        this.numberFriends = numberFriends
    }
}
newUser = new user("VG Alejandro", "Querétaro", "UAQ", "Hombre", "25/08/2001", 20, 250)
console.log(newUser)