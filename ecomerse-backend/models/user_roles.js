const mongoose = require("mongoose"); 
const {Schema} = mongoose; 
const uuidv4 = require("uuid"); 


const UserRolesSchema = new Schema(
    {
        role: {
            type: String, 
            enum: ["ADVISOR_ADMIN", "ADMIN_USER", "VISITOR_USER"], 
            default: "ADMIN_USER"
        }, 
        meta: Object, 
    }, 
    {
        collection: "userRoles", 
        timeseries: {
            createdAt: "created_at", 
            updated_at: "updated_at"
        }
    }
); 
const UserRole = mongoose.model("UserRole", UserRolesSchema); 
module.exports = {
    UserRole
};