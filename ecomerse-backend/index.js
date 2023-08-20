const express = require("express"); 
const mongoose = require("mongoose"); 
const app = express();
const dotenv = require("dotenv").config()


const PORT = process.env.PORT || 8080; 

const bodyParser = require("body-parser"); 
const cookieParser = require("cookie-parser"); 
const cors = require("cors"); 

//TODO: Initialise mongodb connection 
console.log("Initializing the mongodb connection"); 
const uri = process.env.DATABASE
mongoose.set("strictQuery", false)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// TODO: Import all routes Routes; 
const authRoutes = require("./routes/auth_routes");

// Use of middleware
app.use(cors()); 


app.use(bodyParser.json()); 
app.use(cookieParser()); 


// TODO: Routes
app.get("/", (req, res)=>{
    res.send("Server is running")
})
app.use("/api/v1", authRoutes); 


app.listen(PORT,()=> console.log("Server is running on port:" + PORT))
