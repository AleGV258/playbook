// GitHub: @AleGV258
const issue = {
    title: "Issue 1",
    repositoryNameAssociated: "MissionNodeJS",
    status: "Active",
    numberOfComments: 50,
    labels: 12,
    author: "AleGV258",
    dateCreated: "12/03/2022",
    lastUpdated: "13/04/2022",

    getTitleAndAuthor: function(){
      return `${this.title} por ${this.author}`
    },

    getGeneralInfo: function(){
      return `This issue ${this.title} fue creado por ${this.author} el ${this.dateCreated}, con el status: ${this.status}`
    }
}
console.log("Nombre del issue: " + issue.title)
console.log("Nombre del Repositorio Asociado: " + issue.repositoryNameAssociated)
console.log("Status: " + issue.status)
console.log("Número de Comentarios: " + issue.numberOfComments)
console.log("Etiquetas: " + issue.labels)
console.log("Autor: " + issue.author)
console.log("Fecha de Creación: " + issue.dateCreated)
console.log("Última Actualización: " + issue.lastUpdated)
console.log("Nombre del issues y su autor: " + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())