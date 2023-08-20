var express = require("express"); 
var router = express.Router(); 

const AuthController = require("../controllers/auth.controller"); 
const AuthHelper = require("../Helpers/auth");


router.post("/signup", AuthController.sighup); 


module.exports = router; 
