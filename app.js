import express from "express";
import {join} from "path";
import connect from "./db/connect.js"
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || '8080'



const DATABASE_URL = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017";

//Static files enabiling :-
app.use('/student',express.static(join(process.cwd(), "public")))
app.use('/student/edit',express.static(join(process.cwd(), "public")))

//Set Templates Engine :-
app.set("view engine","ejs");

//Load Routes
app.use("/student",web);

//Database is connected :-
connect(DATABASE_URL);

app.listen(port , () => {
    console.log(`Server is responding at http://localhost:${port}`);
})