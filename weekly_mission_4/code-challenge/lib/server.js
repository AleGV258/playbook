// GitHub: @AleGV258

const StudentsController = require("./controllers/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking Api welcome!"});
});

app.get("/v1/students/allStudents/", (request, response) => {
    const allStudents = StudentsController.getAllStudents();
    response.json({students: allStudents});
});

app.get("/v1/students/emailCertification/", (request, response) => {
    const emailStudents = StudentsController.getEmailByCertification();
    response.json({students: emailStudents});
});

app.get("/v1/students/creditsGreater/", (request, response) => {
    const creditsStudents = StudentsController.getByMaxCredits();
    response.json({students: creditsStudents});
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost: ${port}`);
});

// node lib/server.js
// npm run server
