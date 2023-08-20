const mongoose = require("mongoose"); 
const {Schema} = mongoose; 
const crypto = require("crypto");
const uuidv4 = require("uuid"); 

const VisitorUserSchema = new Schema(
    {
        first_name: {
            type: String, 
            required: true, 
            maxlength: 32, 
        }, 
        last_name: {
            type: String, 
            required: true, 
            maxlength: 32
        }, 
        email: {
            type: String, 
            trim: true, 
            required: true, 
            unique: true, 
        }, 
        encrypted_password: {
            type: String, 
            required: true
        }, 
        salt: String, 
        role_id: {
            type: mongoose.type.ObjectId,
        }, 
        status: {
            type: String, 
            enum: ["Active", "Draft", "Deleted"], 
            default: "Active"
        },
        user_profile: {
            type: String
        }
    },
    {
        collection: "visitorUser", 
        timestamps: {
            createdAt: "created_at", 
            updatedAt: "updated_at", 
        }, 
    }
)
VisitorUserSchema.virtual("password")
.set(function (password){
        this._password = password; 
        this.salt = process.env.PASSWORD_SALT; 
        this.encrypted_password = this.securePassword(password)
})
.get(function(){
    return this._password; 
}); 
VisitorUserSchema.method = {
    authenticate: function(plainpassword){
        return this.securePassword(plainpassword) === this.encrypted_password;
    }, 
    securePassword: function(plainpassword){
        if(!plainpassword) return ""; 
        try {
            return crypto
            .createHmac("sha256", this.salt)
            .update(plainpassword)
            .digest("hex")
        } catch (error) {
            console.log(error);
            return error
        }
    }
}; 
const VisitorUser = mongoose.model("VisitorUser", VisitorUserSchema); 

module.exports = {
    VisitorUser
}; 
