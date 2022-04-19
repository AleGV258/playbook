// GitHub: @AleGV258
const pull_request = {
    title: "My First Pull Request",
    branchName: "main",
    dateCreated: "18/04/2022",
    status: "Close",
    repositoryNameAssociated: "MissionNodeJS",

    getStatus: function(){
      return this.status
    },

    getTitleAndAutor: function(){
      return `${this.title} en ${this.repositoryNameAssociated}`
    }
}
console.log("Nombre del pull request: " + pull_request.title)
console.log("Nombre de la Rama: " + pull_request.branchName)
console.log("Fecha de Creación: " + pull_request.dateCreated)
console.log("Status: " + pull_request.status)
console.log("Nombre del Repositorio Asociado: " + pull_request.repositoryNameAssociated)
console.log("El estado actual del repositorio es: " + pull_request.getStatus())
console.log(pull_request.getTitleAndAutor())