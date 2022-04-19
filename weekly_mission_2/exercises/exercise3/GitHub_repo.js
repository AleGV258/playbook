// GitHub: @AleGV258
class repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }

    get getname(){
        return this.name
    }
    set setname(name){
        this.name = name
    }
    get getauthor(){
        return this.author
    }
    set setauthor(author){
        this.author = author
    }
    get getlanguage(){
        return this.language
    }
    set setlanguage(language){
        this.language = language
    }
    get getnumberOfCommits(){
        return this.numberOfCommits
    }
    set setnumberOfCommits(numberOfCommits){
        this.numberOfCommits = numberOfCommits
    }
    get getstars(){
        return this.stars
    }
    set setstars(stars){
        this.stars = stars
    }
    get getforks(){
        return this.forks
    }
    set setforks(forks){
        this.forks = forks
    }
    get getissues_open(){
        return this.issues_open
    }
    set setissues_open(issues_open){
        this.issues_open = issues_open
    }
    get getissues_close(){
        return this.issues_close
    }
    set setissues_close(issues_close){
        this.issues_close = issues_close
    }
}
newrepo = new repo("LaunchX", "carlogilmar", "JavaScript", 100, 199, 299, 10, 10)
console.log(newrepo)