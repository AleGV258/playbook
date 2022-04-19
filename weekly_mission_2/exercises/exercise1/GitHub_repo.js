// GitHub: @AleGV258
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,

    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },

    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
}
console.log("Nombre del repo: " + repo.name)
console.log("Autor: " + repo.author)
console.log("Lenguaje: " + repo.language)
console.log("Número de Commits: " + repo.numberOfCommits)
console.log("Estrellas: " + repo.stars)
console.log("Forks: " + repo.forks)
console.log("Issues Open: " + repo.issues_open)
console.log("Issues Close: " + repo.issues_close)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())