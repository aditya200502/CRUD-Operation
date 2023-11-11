import StudentModel from "../models/Student.js";

class StudentController {

    static createDoc = (req, res) => {
        res.redirect("/student")
    }
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find();

            console.log(result);
            res.render("index", { result });

        } catch (err) {
            console.log(err);
        }
    } 

    static editDoc = (req, res) => {
        res.render("edit");
    }

    static updateDocById = (req, res) => {
        res.render("/student");
    }

    static deleteDocById = (req, res) => {
        res.redirect("/student");
    }
}

export default StudentController;