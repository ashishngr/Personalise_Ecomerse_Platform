const {Product} = require("../models/product"); 
const {AdminUser} = require("../models/admin_user"); 
var mongoose = require("mongoose"); 
var ObjectId = mongoose.Types.ObjectId; 

const ProductController = module.exports; 

const { ERRORS } = require("../Constant"); 
const ErrorUtils = require("../Utils/email_utils")

ProductController.addProduct = async(req, res)=>{
    var {name, price, quantity, category, description, tags, retrunPolicy, state, image} = req.body; 
    if(!name && !price && !quantity && !category && !description && !tags & !retrunPolicy && !state && !image){
        return ErrorUtils.APIErrorResponse(res, ERRORS.GENERIC_BAD_REQUEST); 
    }
    try {
        const creatorAdminId = req.user.id; 
        const creatorAdmin = await AdminUser.findOne({_id: creatorAdminId}); 
        if(!creatorAdmin){
            return ErrorUtils.APIErrorResponse(res, ERRORS.NO_ADMIN_USER_EXISTS)
        }
        let product = {};
        product = new Product({
            name : name, 
            price: price, 
            quantity: quantity, 
            category: category, 
            description: description, 
            tags: tags, 
            retrunPolicy: retrunPolicy, 
            state: state, 
            image: image
        })
        await product.save(); 
        return res.status(200).json({
            data: product, 
            message: "Product created successfully"
        })
    } catch (error) {
        console.log(error); 
        return ErrorUtils.APIErrorResponse(res);
    }
}
ProductController.updateProduct = async(req, res) => {
    try {
        const productId = req.params.id; 
        const creator_admin_id = req.user.id; 

        const product = await Product.findOne({$and : [
            {_id: productId}, 
            {creator_admin_id: creator_admin_id}
        ]})
        if(!product){
            return ErrorUtils.APIErrorResponse(res, ERRORS.NO_PRODUCT_EXISTS)
        }
        const {name, price, quantity, category, description, tags, retrunPolicy, state, image} = req.body; 
        if(!name && !price && !quantity && !category && !description && !tags & !retrunPolicy && !state && !image){
            return ErrorUtils.APIErrorResponse(res, ERRORS.GENERIC_BAD_REQUEST);
        }
        await Product.findByIdAndUpdate(productId, {
            name : name, 
            price: price, 
            quantity: quantity, 
            category: category, 
            description: description, 
            tags: tags, 
            retrunPolicy: retrunPolicy, 
            state: state, 
            image: image
        }, function (err, data){
            if(err){
                return ErrorUtils.APIErrorResponse(res)
            }else{
                return res.status(200).json({
                    data: data, 
                    message: "Product updated successfully"
                })
            }
        })

    } catch (error) {
        console.log(error)
        return ErrorUtils.APIErrorResponse(res);
    }
}; 
ProductController.deleteProduct = async(req, res) => {
    try {
        const productId = req.params.id; 
        const creatorAdminId = req.user.id; 
        const product = await Product.findOne({$and:[
            {_id: productId}, 
            {creator_admin_id: creatorAdminId}
        ]})
        if(!product){
            return res.ErrorUtils.APIErrorResponse(res, ERRORS.NO_PRODUCT_EXISTS)
        }
        await Product.remove({_id: productId}); 
        res.status(200).json({
            message: "Product remove successfully"
        })
    } catch (error) {
       console.log(error); 
       return ErrorUtils.APIErrorResponse(res) 
    }
}; 
ProductController.getAllProduct = async(req, res) => {
    try {
        const creatorAdminId = req.user.id; 
        const adminUser = await AdminUser.find({creator_admin_id: creatorAdminId}); 
        if(!adminUser){
            returnErrorUtils.APIErrorResponse(res, ERRORS.NO_ADMIN_USER_EXISTS);
        }
        var {limit, page} = req.query; 
        if(!page || !limit){
            return ErrorUtils.APIErrorResponse(res, ERRORS.PAGINATION_ERRO);
        }
        page = page || 1; 
        limit = limit || 5; 
        let skip = (page - 1) * limit; 

        let query = {creator_admin_id: creatorAdminId}; 
        const productList = Product.aggregate([
            {
                $match : query
            }, 
            {
                $sort: 1
            }, 
            {
                $skip: skip
            }, 
            {
                $limit: parseInt(limit)
            }
        ]); 
        const count =await Product.countDocuments(query); 
        const result = {
            data : productList, 
            totalProduct : count, 
            currentPage: page
        }; 
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return ErrorUtils.APIErrorResponse(res); 
    }
}
ProductController.getProductById = async(req, res) => {
    try {
        let productId = req.params.id; 
    const creatorAdminId = req.user.id; 
    const product = await Product.findOne({$and:[
        {_id: productId}, 
        {creator_admin_id: creatorAdminId}
    ]})
    if(!product){
        return res.ErrorUtils.APIErrorResponse(res, ERRORS.NO_PRODUCT_EXISTS)
    }
    res.status(200).json({
        data: product, 
        message: "Product find succeessfully"
    })
    } catch (error) {
        console.log(error); 
        return ErrorUtils.APIErrorResponse(res); 
    }
}