import StudentModel from "../models/Student.js";

class StudentController {

    // Craeting  Document
    static createDoc = async(req, res) => {
        // console.log(req.body);
        const {name,age,fees} = req.body;

        //Save the field
        const doc = new StudentModel({
            name:name,
            age:age,
            fees:fees
        })

        const result = await doc.save()

        res.redirect("/student")
    }

    // Retrieving Document
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find();

            //console.log(result);
            res.render("index", { result });

        } catch (err) {
            console.log(err);
        }
    }

    // Editing Document
    static editDoc = (req, res) => {
        res.render("edit");
    }

    // Updating document
    static updateDocById = (req, res) => {
        res.render("/student");
    }

    // Deleting deleting
    static deleteDocById = (req, res) => {
        res.redirect("/student");
    }
}

export default StudentController;