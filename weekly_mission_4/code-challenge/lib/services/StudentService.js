// GitHub: @AleGV258

class StudentService {
    static getAllStudents(students){
        const allStudents = students.map((student) => student);
        return allStudents;
    }
    static getEmailByCertification(students){
        const studentsCertification = students.filter((student) => student.haveCertification == true);
        const studentsEmail = studentsCertification.map((student) => student.email);
        return studentsEmail;
    }
    static getByMaxCredits(students){
        const studentsCredits = students.filter((student) => student.credits > 500);
        return studentsCredits;
    }
}

module.exports = StudentService;