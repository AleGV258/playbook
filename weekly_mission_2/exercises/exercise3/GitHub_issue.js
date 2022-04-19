// GitHub: @AleGV258
class issue {
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }

    get gettitle(){
        return this.title
    }
    set settitle(title){
        this.title = title
    }
    get getrepositoryNameAssociated(){
        return this.repositoryNameAssociated
    }
    set setrepositoryNameAssociated(repositoryNameAssociated){
        this.repositoryNameAssociated = repositoryNameAssociated
    }
    get getstatus(){
        return this.status
    }
    set setstatus(status){
        this.status = status
    }
    get getnumberOfComments(){
        return this.numberOfComments
    }
    set setnumberOfComments(numberOfComments){
        this.numberOfComments = numberOfComments
    }
    get getlabels(){
        return this.labels
    }
    set setlabels(labels){
        this.labels = labels
    }
    get getauthor(){
        return this.author
    }
    set setauthor(author){
        this.author = author
    }
    get getdateCreated(){
        return this.dateCreated
    }
    set setdateCreated(dateCreated){
        this.dateCreated = dateCreated
    }
    get getlastUpdated(){
        return this.lastUpdated
    }
    set setlastUpdated(lastUpdated){
        this.lastUpdated = lastUpdated
    }
}
newissue = new issue("Issue 1", "MissionNodeJS", "Active", 50, 12, "@AleGV258", "12/03/2022", "13/04/2022")
console.log(newissue)