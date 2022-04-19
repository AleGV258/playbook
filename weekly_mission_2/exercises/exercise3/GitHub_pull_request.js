// GitHub: @AleGV258
class pull_request {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated){
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }

    get gettitle(){
        return this.title
    }
    set settitle(title){
        this.title = title
    }
    get getbranchName(){
        return this.branchName
    }
    set setbranchName(branchName){
        this.branchName = branchName
    }
    get getdateCreated(){
        return this.dateCreated
    }
    set setdateCreated(dateCreated){
        this.dateCreated = dateCreated
    }
    get getstatus(){
        return this.status
    }
    set setstatus(status){
        this.status = status
    }
    get getrepositoryNameAssociated(){
        return this.repositoryNameAssociated
    }
    set setrepositoryNameAssociated(repositoryNameAssociated){
        this.repositoryNameAssociated = repositoryNameAssociated
    }
}
newpull_request = new pull_request("My First Pull Request", "main", "18/04/2022", "Close", "MissionNodeJS")
console.log(newpull_request)