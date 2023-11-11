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
    static editDoc = async(req, res) => {
        
        const {id} = req.params;
         try {
            const result = await StudentModel.findById(id);
            //console.log(result);
            res.render("edit",{result});
         } catch (error) {
            console.log(error);
         }
        
    }

    // Updating document
    static updateDocById = async(req, res) => {

        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body);
            res.redirect("/student");
        } catch (error) {
            console.log(error);
        }
    }

    // Deleting deleting
    static deleteDocById = async(req, res) => {
        
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id);
            res.redirect("/student");
        } catch (error) {
            console.log(error)
        }
    }
}

export default StudentController;