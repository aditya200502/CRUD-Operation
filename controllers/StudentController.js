class StudentController {

    static createDoc = (req,res) =>{
        res.redirect("/student")
    }
    static getAllDoc = (req,res) => {
        res.render("index");
    }

    static editDoc = (req,res) => {
        res.render("edit");
    }

    static updateDocById = (req,res) => {
        res.render("/student");
    }

    static deleteDocById = (req,res) => {
        res.redirect("/student");
    }
}

export default StudentController;