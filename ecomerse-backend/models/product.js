const mongoose = require("mongoose"); 
const {Schema} = mongoose; 

const ProductSchema = new Schema(
    {
        name: {
            type: String, 
            require: true, 
        }, 
        creator_admin_id: {
            admin_id: mongoose.Types.ObjectId
        },
        price: {
            type: Number, 
            require: true
        }, 
        quantity: {
            type: Number, 
            require: true
        }, 
        category: {
            type: String, 
            require: true
        }, 
        description: {
            type: String, 
            require: true, 
        }, 
        tags: {
            type: String, 
            require: true, 
        }, 
        returnPolicy: {
            type: Number, 
            enum: [7, 15, 30],
            require: true, 
        }, 
        state: {
            type: String,
            enum: ["New", "Refurbish"] 
        }, 
        image: {
            type: String, 
            require: true, 
        }, 
        
    }, 
    {
        collection: "product", 
        timestamps: {
            createdAt: "created_at", 
            updatedAt: "updated_at", 
        }, 
    }
); 

const Product = mongoose.model("Product", ProductSchema); 