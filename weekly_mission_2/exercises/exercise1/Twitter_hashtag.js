// GitHub: @AleGV258
const hashtag = {
    title: "Woopa",
    datePublication: "15/04/2022",
    numberTweets: 80,
    description: "El nuevo nombre de la mascota de MissionNodeJS",

    getHashtagInfo: function(){
        return `${this.title} habla sobre ${this.description}`
    }
}
console.log("Título: " + hashtag.title)
console.log("Fecha de Publicación: " + hashtag.datePublication)
console.log("Número de Tweets: " + hashtag.numberTweets)
console.log("Descripción: " + hashtag.description)
console.log(hashtag.getHashtagInfo())