// GitHub: @AleGV258

const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentsController {
    static getAllStudents(){
        const allStudents = Reader.readJsonFile("visualpartners.json");
        const all = StudentService.getAllStudents(allStudents);
        return all;
    }
    static getEmailByCertification(){
        const allStudents = Reader.readJsonFile("visualpartners.json");
        const email = StudentService.getEmailByCertification(allStudents);
        return email;
    }
    static getByMaxCredits(){
        const allStudents = Reader.readJsonFile("visualpartners.json");
        const score = StudentService.getByMaxCredits(allStudents);
        return score;
    }
}

module.exports = StudentsController;