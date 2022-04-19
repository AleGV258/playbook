// GitHub: @AleGV258
class trending_topics {
    constructor(title, date, category, numberOfTweets, rankOfTrending){
        this.title = title
        this.date = date
        this.category = category
        this.numberOfTweets = numberOfTweets
        this.rankOfTrending = rankOfTrending
    }

    get gettitle(){
        return this.title
    }
    set settitle(title){
        this.title = title
    }
    get getdate(){
        return this.date
    }
    set setdate(date){
        this.date = date
    }
    get getcategory(){
        return this.category
    }
    set setcategory(category){
        this.category = category
    }
    get getnumberOfTweets(){
        return this.numberOfTweets
    }
    set setnumberOfTweets(numberOfTweets){
        this.numberOfTweets = numberOfTweets
    }
    get getrankOfTrending(){
        return this.rankOfTrending
    }
    set setrankOfTrending(rankOfTrending){
        this.rankOfTrending = rankOfTrending
    }
}
newtrending_topics = new trending_topics("LaunchX", "02/03/2022", "Tecnología", 1000, 1)
console.log(newtrending_topics)