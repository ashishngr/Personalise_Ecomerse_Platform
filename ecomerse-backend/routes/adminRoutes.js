var express = require("express"); 
var router = express.Router(); 

const AuthHelper = require("../Helpers/AdminAuth");
const ProcutController = require("../controllers/product.controller"); 

router.post("/product", AuthHelper.validateToken, ProcutController.addProduct); 


module.exports = router; 
