// GitHub: @AleGV258
class travel {
    constructor(user, driver, car, driverStars, travelTime, travelDestination, travelOrigin, payMethod, cost){
        this.user = user
        this.driver = driver
        this.car = car
        this.driverStars = driverStars
        this.travelTime = travelTime
        this.travelDestination = travelDestination
        this.travelOrigin = travelOrigin
        this.payMethod = payMethod
        this.cost = cost
    }

    get getuser(){
        return this.user
    }
    set setuser(user){
        this.user = user
    }
    get getdriver(){
        return this.driver
    }
    set setdriver(driver){
        this.driver = driver
    }
    get getcar(){
        return this.car
    }
    set setcar(car){
        this.car = car
    }
    get getdriverStars(){
        return this.driverStars
    }
    set setdriverStars(driverStars){
        this.driverStars = driverStars
    }
    get gettravelTime(){
        return this.travelTime
    }
    set settravelTime(travelTime){
        this.travelTime = travelTime
    }
    get gettravelDestination(){
        return this.travelDestination
    }
    set settravelDestination(travelDestination){
        this.travelDestination = travelDestination
    }
    get gettravelOrigin(){
        return this.travelOrigin
    }
    set settravelOrigin(travelOrigin){
        this.travelOrigin = travelOrigin
    }
    get getpayMethod(){
        return this.payMethod
    }
    set setpayMethod(payMethod){
        this.payMethod = payMethod
    }
    get getcost(){
        return this.cost
    }
    set setcost(cost){
        this.cost = cost
    }
}
newtravel = new travel("Michell", "Marcos", "Nissan 2017 gris", 4.8, "45 minutos", "La Alameda", "Ciudad del Sol", "Efectivo", 250.00)
console.log(newtravel)