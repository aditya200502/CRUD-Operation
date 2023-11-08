import express from "express";
const app = express();
const port = process.env.PORT || '8080'

import connect from "./db/connect.js"

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017";

//Database is connected :-
connect(DATABASE_URL);

app.listen(port , () => {
    console.log(`Server is responding at http://localhost:${port}`);
})