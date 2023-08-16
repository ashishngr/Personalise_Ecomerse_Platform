const express = require("express"); 
const mongoose = require("mongoose"); 
require("dotenv").config(); 
const app = express();


port = process.env.PORT || 8000; 

const bodyParser = require("body-parser"); 
const cookieParser = require("cookie-parser"); 
const cors = require("cors"); 

// TODO: Import all routes Routes; 


// Use of middleware
app.use(cors()); 


app.use(bodyParser.json()); 
app.use(cookieParser()); 


// TODO: Routes

console.log("Initializing the mongodb connection"); 
const DB = async() => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.createConnection(process.env.DATABASE) 
        console.log("Database connceted")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
app.listen(port, ()=>{
    console.log(`app is running at ${port}`)
})
