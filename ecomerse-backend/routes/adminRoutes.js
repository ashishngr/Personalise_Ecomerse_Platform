var express = require("express"); 
var router = express.Router(); 
exports.router = router;

const AdminAuthHelper  = require("../Helpers/AdminAuth");
const ProductController = require("../controllers/product.controller"); 


let validateToken = AdminAuthHelper.validateToken; 


router.post("/product", validateToken, ProductController.addProduct); 
router.post("/product/:id", validateToken, ProductController.updateProduct); 
router.delete("/product/:id", validateToken, ProductController.deleteProduct); 
router.get("/product", validateToken, ProductController.getAllProduct);  
router.get("/product/:id", validateToken, ProductController.getProductById);  


module.exports = router; 
