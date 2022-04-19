// GitHub: @AleGV258
const trending_topics = {
    title: "LaunchX",
    date: "02/03/2022",
    category: "Tecnología",
    numberOfTweets: 1000,
    rankOfTrending: 1,

    getTrendingOfNow: function(){
        return `${this.title} tiene ${this.numberOfTweets} tweets y esta en el rank ${this.rankOfTrending}`
    }
}
console.log("Título: " + trending_topics.title)
console.log("Fecha: " + trending_topics.date)
console.log("Categoría: " + trending_topics.category)
console.log("Número de Tweets del Tema: " + trending_topics.numberOfTweets)
console.log("Rank del Trending: " + trending_topics.rankOfTrending)
console.log(trending_topics.getTrendingOfNow())