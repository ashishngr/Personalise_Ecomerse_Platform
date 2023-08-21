const {AdminUser} = require("../models/admin_user"); 
const {UserRole} = require("../models/admin_user"); 
const jwt = require("jsonwebtoken"); 
const uuidv4 = require("uuid"); 
var mongoose = require("mongoose"); 

var ObjectId = mongoose.Types.ObjectId; 

const {ERRORS} = require("../Constant"); 
const ErrorUtils = require("../Utils/error_utils"); 
const AuthHelper = require("../Helpers/auth"); 

const AuthController = module.exports; 


AuthController.sighup = async(req, res) => {
    try {
        const {first_name, last_name, email, password, role_id} = req.body; 
        // let role = await UserRole.findOne({_id: role_id}); 
        // if(!role){
        //     return ErrorUtils.APIErrorResponse(res, ERRORS.ROLE_DOES_NOT_EXISTS)
        // }
        let adminUser = await AdminUser.findOne({email});
        console.log("admin user", adminUser)
        if(adminUser){
            return ErrorUtils.APIErrorResponse(res, ERRORS.ADMIN_USER_ALREADY_EXIST);
        }
        adminUser = new AdminUser({
            first_name, 
            last_name, 
            email, 
            password, 
            role_id: role_id
        });
        await adminUser.save(); 

        const payload = {
            adminUser: {
                id: adminUser.id, 
                role_id: adminUser.role_id
            }
        }
        // TODO: Assign a JWT token 
        const accessToken = AuthHelper.createJWTToken(payload); 
        return res.status(200).json({
            access_toke: accessToken, 
            message: "User Register Successfully"
        });
    } catch (error) {
        console.log(error); 
        return ErrorUtils.APIErrorResponse(res);
    }
}; 
AuthController.login = async(req, res) => {
    const {email, password} = req.body; 
    if(!email || !password){
        return ErrorUtils.APIErrorResponse(res, ERRORS.GENERIC_BAD_REQUEST);
    }
    try {
        let user = await AdminUser.findOne({ email }); 
        if(!user){
            return ErrorUtils.APIErrorResponse(res, ERRORS.USER_CREDENTIALS_INVALID)
        } 
        const isMatchedPassword = user.securePassword(password) === user.encrypted_password; 
        if(!isMatchedPassword){
            return ErrorUtils.APIErrorResponse(res, ERRORS)
        }; 
        const payload = {
            user: {
                id: user.id, 
                role: "Admin User"
            }
        }; 
        const accessToken = AuthHelper.createJWTToken(payload); 
        
        return res.status(200).json({
            access_token: accessToken, 
            message: "User credentials match successfully"
        })
    } catch (error) {
        console.log(error); 
        return ErrorUtils.APIErrorResponse(res); 
    }
}

AuthController.logout = async(req, res) => {
    const token = req.headers; 
    console.log(token)
}
